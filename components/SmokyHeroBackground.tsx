"use client";
import React, { useEffect, useRef } from 'react';

export default function SmokyHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grainCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const gl = cv.getContext('webgl') || cv.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) return;

    const VS = `
      attribute vec2 a_pos;
      void main(){ gl_Position = vec4(a_pos,0.,1.); }
    `;

    const FS = `
      precision highp float;
      uniform vec2  u_res;
      uniform float u_time;

      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
      float vnoise(vec2 p){
        vec2 i=floor(p), f=fract(p);
        // Quintic hermite curve for smoother noise
        vec2 u = f*f*f*(f*(f*6.-15.)+10.);
        return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),
                   mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
      }
      float fbm(vec2 p){
        float v=0.,a=.5; 
        for(int i=0;i<3;i++){ // Reduced to 3 octaves for significant performance boost
          v+=a*vnoise(p);p*=2.02;a*=.5;
        } 
        return v;
      }

      float blob(vec2 uv, vec2 c, float r, float ar){
        vec2 d = (uv - c) * vec2(ar, 1.);
        float w = max(0., 1. - length(d)/r);
        return smoothstep(0., 1., w*w); // Smoother falloff
      }

      void main(){
        vec2 uv  = gl_FragCoord.xy / u_res;
        uv.y     = 1. - uv.y;
        float ar = u_res.x / u_res.y;
        float T  = u_time * 0.55; // Further reduced speed for a calmer feel

        // Smoke fills the entire area now
        float animMask = 1.0;

        vec2 flameUV = uv;
        flameUV.y += T * 0.12; 
        // Subtler drift
        flameUV.x += sin(uv.y * 4.0 + T * 1.0) * 0.02 * animMask;

        vec2 q1 = vec2(
          fbm(flameUV * 1.8 + vec2(0.0, 0.0) + T * 0.15),
          fbm(flameUV * 1.8 + vec2(5.2, 1.3) + T * 0.12)
        );
        vec2 r1 = vec2(
          fbm(flameUV * 2.2 + 4.0*q1 + vec2(1.7, 9.2) + T * 0.12),
          fbm(flameUV * 2.2 + 4.0*q1 + vec2(8.3, 2.8) + T * 0.10)
        );

        vec2 q2 = vec2(
          fbm(flameUV * 4.0 + vec2(2.1, 7.4) + T * 0.35),
          fbm(flameUV * 4.0 + vec2(9.3, 3.1) + T * 0.30)
        );

        float warpAmt = animMask * 0.85; // Reduced warping
        vec2 smokeUV = uv
          + warpAmt * (0.45 * r1 + 0.25 * q1)
          + warpAmt * 0.18 * q2;

        vec2 p0 = vec2(-0.18 + .10*sin(T*.8),   1.20 + .10*cos(T*.6));
        vec2 p1 = vec2( 1.18 + .10*cos(T*.8),  1.18 + .10*sin(T*.7));
        vec2 p2 = vec2( 1.20 + .08*sin(T*.6+1.), 0.50 + .10*cos(T*.5+.5));
        vec2 p3 = vec2(-0.20 + .10*cos(T*.7+2.), -0.20 + .10*sin(T*.5+.8));
        vec2 p4 = vec2( 0.50 + .12*sin(T*.5+3.), -0.18 + .10*cos(T*.45+1.));
        vec2 p5 = vec2(-0.18 + .10*sin(T*.6+4.),  0.40 + .12*cos(T*.6+2.));

        float w0 = blob(smokeUV, p0, 1.15, ar);
        float w1 = blob(smokeUV, p1, 1.05, ar);
        float w2 = blob(smokeUV, p2, 0.95, ar);
        float w3 = blob(smokeUV, p3, 1.0, ar);
        float w4 = blob(smokeUV, p4, 0.9, ar);
        float w5 = blob(smokeUV, p5, 0.85, ar);

        float vWarp = clamp(smokeUV.y, 0., 1.5);

        // SLIGHTLY MORE PURPLE PALETTE
        vec3 cBrightPurple = vec3(0.60, 0.10, 1.00); 
        vec3 cElectricPurp = vec3(0.75, 0.30, 1.00);
        vec3 cWhite       = vec3(1.00, 1.00, 1.00);

        // Mix white slightly later to increase purple dominance
        vec3 grad = mix(cBrightPurple, cElectricPurp, smoothstep(0.00, 0.30, vWarp));
             grad = mix(grad,          cWhite,         smoothstep(0.40, 0.75, vWarp));

        float wSum = w0+w1+w2+w3+w4+w5;
        vec3 blobTint = vec3(0.);
        blobTint += w0 * vec3(0.60, 0.15, 0.95); // Back to Purple
        blobTint += w1 * vec3(0.65, 0.20, 1.00); // Purple
        blobTint += w2 * vec3(1.00, 1.00, 1.00); // White
        blobTint += w3 * vec3(0.70, 0.30, 1.00); // Purple
        blobTint += w4 * vec3(1.00, 1.00, 1.00); // White
        blobTint += w5 * vec3(0.45, 0.05, 0.85); // Purple

        vec3 blobNorm = blobTint / max(wSum, 0.01);
        float cov = smoothstep(0.0, 1.0, wSum * 0.90);
        vec3 col = mix(grad, blobNorm, cov * 0.60);

        float flameMask = 1.0; // Dynamic mask removed for full coverage

        float flick1 = fbm(smokeUV * 4.5 + T * 1.5);
        float flicker = flick1 * 0.32; 

        col = mix(col, col * vec3(1.05, 0.95, 1.35), flicker * flameMask);
        col += flicker * flameMask * 0.20 * vec3(1.0, 1.0, 1.0); 

        float density = fbm(smokeUV * 3.0 + T * 0.5);
        col *= (1.0 - 0.15) + density * 0.30;

        gl_FragColor = vec4(clamp(col, 0., 1.), 1.0);
      }
    `;

    const mkS = (t: number, s: string) => {
      const sh = gl.createShader(t)!;
      gl.shaderSource(sh, s);
      gl.compileShader(sh);
      return sh;
    };
    const pr = gl.createProgram()!;
    gl.attachShader(pr, mkS(gl.VERTEX_SHADER, VS));
    gl.attachShader(pr, mkS(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(pr);
    gl.useProgram(pr);

    const bf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const ap = gl.getAttribLocation(pr, 'a_pos');
    gl.enableVertexAttribArray(ap);
    gl.vertexAttribPointer(ap, 2, gl.FLOAT, false, 0, 0);

    const uR = gl.getUniformLocation(pr, 'u_res');
    const uT = gl.getUniformLocation(pr, 'u_time');

    let requestRef: number;

    const resize = () => {
      const W = window.innerWidth;
      const H = 688;
      // Optimized: Use lower internal resolution for heavy shaders
      const pr2 = 0.75;
      cv.width = W * pr2;
      cv.height = H * pr2;
      cv.style.width = W + 'px';
      cv.style.height = H + 'px';
      gl.viewport(0, 0, cv.width, cv.height);
    };

    const draw = (ts: number) => {
      gl.uniform2f(uR, cv.width, cv.height);
      gl.uniform1f(uT, ts * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestRef = requestAnimationFrame(draw);
    };

    resize();
    requestRef = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(requestRef);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Optimized Grain: Single draw
  useEffect(() => {
    const c = grainCanvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const T = 128; // Smaller texture
    const off = document.createElement('canvas');
    off.width = T;
    off.height = T;
    const ox = off.getContext('2d')!;

    const id = ox.createImageData(T, T);
    const d = id.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      d[i] = d[i + 1] = d[i + 2] = v;
      d[i + 3] = 255;
    }
    ox.putImageData(id, 0, 0);
    const pattern = ctx.createPattern(off, 'repeat')!;

    const render = () => {
      c.width = window.innerWidth;
      c.height = 688;
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, c.width, c.height);
    };

    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-[688px] overflow-hidden pointer-events-none will-change-transform">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ imageRendering: 'auto' }} />
      <canvas ref={grainCanvasRef} className="absolute inset-0 opacity-[0.1] mix-blend-overlay w-full h-full pointer-events-none" />
    </div>
  );
}
