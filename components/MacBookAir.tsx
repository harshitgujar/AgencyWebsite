"use client";
import React, { useState, useEffect } from 'react';
import { ScrambleText } from './ScrambleText';
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/67af73bc-f664-45bb-a3b0-37ed34ffe6d7";
const imgRectangle18 = "https://www.figma.com/api/mcp/asset/98cd0bd3-9a08-4874-9be9-28c67899b9e8";
const imgRectangle20 = "https://www.figma.com/api/mcp/asset/d0475214-bda9-433a-aa3f-8a7c79d9d6d4";
const imgRectangle21 = "https://www.figma.com/api/mcp/asset/a1a2fe64-41fa-4651-a52c-4f7ced9b1f37";
const imgRectangle22 = "https://www.figma.com/api/mcp/asset/b97819a8-8c51-4863-828d-e53c165b9989";
const img4305Fdf59819D6Ff1590B9F5C7B0F8131 = "https://www.figma.com/api/mcp/asset/29a54dd2-dda7-46be-b616-258d4a5b70fd";
const imgImage1 = "https://www.figma.com/api/mcp/asset/fc74745c-7c2d-4c8c-8e82-e884d10acb87";
const imgRectangle26 = "https://www.figma.com/api/mcp/asset/fc8e20c0-f31f-4eb0-a9ac-8a08b71c1804";
const imgPolygon1 = "https://www.figma.com/api/mcp/asset/ad19b2a6-01a2-42c5-a10b-db4ef12f9381";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/30e9cd34-b56d-410e-8fc8-f581d48d9b52";
const imgVector = "https://www.figma.com/api/mcp/asset/0aca210c-61dd-4118-b3dd-268c24610652";
const imgArrow1 = "https://www.figma.com/api/mcp/asset/1c681b0c-0959-4101-b46f-99c7cbc550e6";
const imgArrow2 = "https://www.figma.com/api/mcp/asset/cfd72fe8-9c51-400a-bce6-54bed42af5f9";
const imgFrame = "https://www.figma.com/api/mcp/asset/01345086-177a-45c3-ae84-ab578226e8b2";
const imgEllipse10 = "https://www.figma.com/api/mcp/asset/10ba602e-5ecf-4709-ab80-016f8fd43479";
const imgLine1 = "https://www.figma.com/api/mcp/asset/2e0bc9a6-d02e-4f29-b501-1f7913673f33";
const imgLine2 = "https://www.figma.com/api/mcp/asset/c612bc6f-3214-4e79-a3e5-f4df66b0233e";
const imgLine3 = "https://www.figma.com/api/mcp/asset/5b518697-5b36-451a-919c-6907a5e0c1c4";
const imgLine4 = "https://www.figma.com/api/mcp/asset/b75ebf2e-eada-46e2-a692-542c9af8ece5";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/1739e85a-1e48-44ae-812d-735a13a74eff";

export default function MacBookAir() {
  const [scrambleTrigger, setScrambleTrigger] = useState(0);

  useEffect(() => {
    // 3 seconds of original text + 1.5 seconds for animation
    const interval = setInterval(() => {
      setScrambleTrigger((prev: number) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#080808] relative w-screen min-h-screen" data-name="MacBook Air - 2" data-node-id="7:29">
      <div className="absolute bg-black h-[6518px] left-0 top-[681px] w-full" data-node-id="38:40" />
      <div className="absolute h-[688px] left-0 top-0 w-full" data-node-id="7:30">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={imgRectangle1} />
      </div>
      <div className="absolute h-[688px] left-0 top-0 w-full" data-node-id="7:31">
        <div className="absolute bg-[rgba(0,0,0,0)] h-[685px] left-0 top-0 w-full" data-node-id="7:32" />
        <h1 className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[calc(50%-645px)] not-italic text-[150px] text-white top-[calc(50%+179px)] whitespace-nowrap" data-node-id="7:33">
          UNITED,UNBOUND
        </h1>
        <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[797px] mix-blend-difference not-italic text-[#bbb] text-[12px] top-[67px] whitespace-nowrap" data-node-id="7:35">
          WORK
        </p>
        <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[906px] mix-blend-difference not-italic text-[#bbb] text-[12px] top-[67px] whitespace-nowrap" data-node-id="7:36">
          MANIFESTO
        </p>
        <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[1045px] mix-blend-difference not-italic text-[#bbb] text-[12px] top-[67px] whitespace-nowrap" data-node-id="7:37">
          TEAM
        </p>
        <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[1149px] mix-blend-difference not-italic text-[#bbb] text-[12px] top-[67px] whitespace-nowrap" data-node-id="7:38">
          CONTACT
        </p>
        <ScrambleText
          text="MAKE"
          className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[calc(50%-538px)] not-italic text-[16px] text-white top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text="WORK"
          className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[calc(50%-331px)] not-italic text-[16px] text-white top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text="THAT"
          className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[calc(50%-119px)] not-italic text-[16px] text-white top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text="MATTERS"
          className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[calc(50%+84px)] not-italic text-[16px] text-white top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text="TO"
          className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[calc(50%+319px)] not-italic text-[16px] text-white top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <ScrambleText
          text="YOU"
          className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[calc(50%+504px)] not-italic text-[16px] text-white top-[475px] whitespace-nowrap"
          trigger={scrambleTrigger}
        />
        <p className="absolute font-['yagiza:Regular',sans-serif] leading-[normal] left-[47px] not-italic text-[40px] text-white top-[62px] whitespace-nowrap" data-node-id="54:114">
          el
        </p>
      </div>
      <div className="absolute contents left-[144px] top-[960px]" data-node-id="19:48">
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[960px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="19:50" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[994px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="19:52" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1044px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="19:56" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1011px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="19:57" />
          </div>
        </div>
        <div className="absolute flex h-px items-center justify-center left-[144px] top-[1028px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-px w-[2.667px]" data-node-id="19:58" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[977px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="19:59" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[144px] top-[1044px]" data-node-id="27:2">
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1044px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:3" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1078px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:4" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1128px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:5" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1095px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:6" />
          </div>
        </div>
        <div className="absolute flex h-px items-center justify-center left-[144px] top-[1112px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-px w-[2.667px]" data-node-id="27:7" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1061px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:8" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[144px] top-[1128px]" data-node-id="27:10">
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1128px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:11" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1162px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:12" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1212px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:13" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1179px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:14" />
          </div>
        </div>
        <div className="absolute flex h-px items-center justify-center left-[144px] top-[1196px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-px w-[2.667px]" data-node-id="27:15" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1145px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:16" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[144px] top-[1212px]" data-node-id="27:18">
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1212px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:19" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1246px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:20" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1296px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:21" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1263px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:22" />
          </div>
        </div>
        <div className="absolute flex h-px items-center justify-center left-[144px] top-[1280px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-px w-[2.667px]" data-node-id="27:23" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1229px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:24" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[144px] top-[1211px]" data-node-id="27:28">
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1211px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:29" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1245px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:30" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1295px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:31" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1262px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:32" />
          </div>
        </div>
        <div className="absolute flex h-px items-center justify-center left-[144px] top-[1279px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-px w-[2.667px]" data-node-id="27:33" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1228px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:34" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[144px] top-[1295px]" data-node-id="27:35">
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1295px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:36" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1329px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:37" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1379px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:38" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1346px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:39" />
          </div>
        </div>
        <div className="absolute flex h-px items-center justify-center left-[144px] top-[1363px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-px w-[2.667px]" data-node-id="27:40" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1312px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:41" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[144px] top-[1379px]" data-node-id="27:43">
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1379px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:44" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1413px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:45" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1463px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:46" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1430px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:47" />
          </div>
        </div>
        <div className="absolute flex h-px items-center justify-center left-[144px] top-[1447px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-px w-[2.667px]" data-node-id="27:48" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1396px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:49" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[144px] top-[1463px]" data-node-id="27:82">
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1463px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:83" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1497px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:84" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1547px] w-[7px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[7px]" data-node-id="27:85" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1514px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:86" />
          </div>
        </div>
        <div className="absolute flex h-px items-center justify-center left-[144px] top-[1531px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-px w-[2.667px]" data-node-id="27:87" />
          </div>
        </div>
        <div className="absolute flex h-[2px] items-center justify-center left-[144px] top-[1480px] w-[2.667px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#808080] h-[2px] w-[2.667px]" data-node-id="27:88" />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[130px] size-[8px] top-[957px]">
        <div className="flex-none rotate-90">
          <div className="relative size-[8px]" data-node-id="27:26">
            <div className="absolute bottom-1/4 left-[15.83%] right-[15.83%] top-[12.5%]">
              <img alt="" className="block max-w-none size-full" src={imgPolygon1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[421px] left-[266px] top-[993px] w-[811px]" data-node-id="27:27">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle18} />
      </div>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[266px] not-italic text-[20px] text-white top-[1434px] whitespace-nowrap" data-node-id="27:58">
        CONCEPT SERIES, WEB DEVELOPMENT WITH ENTIRE BRANDING
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[1152px] not-italic text-[32px] text-white top-[1202px] whitespace-nowrap" data-node-id="27:73">
        01
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[147px] not-italic text-[24px] text-white top-[847px] whitespace-nowrap" data-node-id="27:117">
        WHAT WE DO
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[147px] not-italic text-[24px] text-white top-[5153px] whitespace-nowrap" data-node-id="27:121">
        TEAM
      </p>
      <div className="-translate-x-1/2 absolute border border-solid border-white h-[46px] left-1/2 rounded-[40px] top-[1629px] w-[256px]" data-node-id="27:119" />
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[542px] not-italic text-[16px] text-white top-[1643px] whitespace-nowrap" data-node-id="27:120">
        DISCOVER ALL PROJECTS
      </p>
      <p className="absolute decoration-solid font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[670px] not-italic text-[24px] text-white top-[2765px] underline whitespace-nowrap" data-node-id="50:86">
        JUST SAY HII
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[266px] not-italic text-[#6e6d6d] text-[14px] top-[1461px] uppercase w-[771px]" data-node-id="27:123">{`Creative Direction, Artist Curation, Art Direction, Key Visual & Video Production, Event Planning, Event Production`}</p>
      <div className="absolute h-[403px] left-[452px] top-[5243px] w-[311px]" data-node-id="27:128">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle20} />
      </div>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[452px] not-italic text-[14px] text-white top-[5653px] uppercase whitespace-nowrap" data-node-id="27:134">
        (01)
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[122.96500396728516%] left-[739px] not-italic text-[32px] text-white top-[5359px] uppercase w-[189px]" data-node-id="27:135">
        HARSHIT GUJAR
      </p>
      <div className="absolute h-[75px] left-[739px] top-[5475px] w-[76px]" data-node-id="33:2">
        <img alt="" className="absolute block max-w-none size-full" src={imgEllipse1} />
      </div>
      <p className="absolute font-['Darker_Grotesque:Light',sans-serif] font-light leading-[1.353] left-[766px] text-[64px] text-white top-[5460px] uppercase whitespace-nowrap" data-node-id="33:3">
        +
      </p>
      <div className="absolute h-[403px] left-[164px] top-[5930px] w-[311px]" data-node-id="33:4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle21} />
      </div>
      <div className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[122.96500396728516%] left-[451px] not-italic text-[32px] text-white top-[6047px] uppercase w-[189px] whitespace-pre-wrap" data-node-id="33:5">
        <p className="mb-0">{`aMAAN `}</p>
        <p>AHMED</p>
      </div>
      <p className="absolute font-['Darker_Grotesque:Light',sans-serif] font-light leading-[1.353] left-[478px] text-[64px] text-white top-[6148px] uppercase whitespace-nowrap" data-node-id="33:6">
        +
      </p>
      <div className="absolute h-[75px] left-[451px] top-[6163px] w-[76px]" data-node-id="33:7">
        <img alt="" className="absolute block max-w-none size-full" src={imgEllipse1} />
      </div>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[164px] not-italic text-[14px] text-white top-[6340px] uppercase whitespace-nowrap" data-node-id="33:8">
        (02)
      </p>
      <div className="absolute h-[403px] left-[452px] top-[6644px] w-[311px]" data-node-id="33:12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle22} />
      </div>
      <div className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[122.96500396728516%] left-[739px] not-italic text-[32px] text-white top-[6760px] uppercase w-[189px] whitespace-pre-wrap" data-node-id="33:13">
        <p className="mb-0">{`aMAAN `}</p>
        <p>AHMED</p>
      </div>
      <p className="absolute font-['Darker_Grotesque:Light',sans-serif] font-light leading-[1.353] left-[766px] text-[64px] text-white top-[6861px] uppercase whitespace-nowrap" data-node-id="33:14">
        +
      </p>
      <div className="absolute h-[75px] left-[739px] top-[6876px] w-[76px]" data-node-id="33:15">
        <img alt="" className="absolute block max-w-none size-full" src={imgEllipse1} />
      </div>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[452px] not-italic text-[14px] text-white top-[7054px] uppercase whitespace-nowrap" data-node-id="33:16">
        (03)
      </p>
      <div className="-translate-y-1/2 absolute aspect-[194.28570556640625/77.02499389648438] left-[-9.53%] right-[107.03%] top-[calc(50%-512.5px)]" data-name="Vector" data-node-id="27:114">
        <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[367px] size-[736px] top-[-1124px]" data-name="4305fdf59819d6ff1590b9f5c7b0f813 1" data-node-id="7:46">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4305Fdf59819D6Ff1590B9F5C7B0F8131} />
      </div>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[453px] not-italic text-[#f6f6f6] text-[14px] top-[5218px] uppercase whitespace-nowrap" data-node-id="27:129">
        Branch Director, CREATIVE Director
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[165px] not-italic text-[#f6f6f6] text-[14px] top-[5906px] uppercase whitespace-nowrap" data-node-id="33:9">
        Branch Director, CREATIVE Director
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[453px] not-italic text-[#f6f6f6] text-[14px] top-[6619px] uppercase whitespace-nowrap" data-node-id="33:17">
        Branch Director, CREATIVE Director
      </p>
      <div className="absolute h-[711px] left-[-8px] top-[7199px] w-[1304px]" data-name="image 1" data-node-id="1:4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[101.91%]" src={imgImage1} />
        </div>
      </div>
      <p className="absolute bg-clip-text bg-gradient-to-b font-['Diamond_Grotesk:Regular',sans-serif] from-white leading-[normal] left-[147px] not-italic text-[64px] text-[transparent] to-[#4e4e4e] to-[59.127%] top-[2007px] w-[763px]" data-node-id="50:72">{`We don't follow trends; we make them ancient history. In a world of static, quiet brands die—we make yours unignorable. Stop blending in and get loud. Just say "hi" to see exactly how we'll dominate together.`}</p>
      <div className="absolute flex h-[10px] items-center justify-center left-[311px] top-[873px] w-[11px]">
        <div className="flex-none rotate-[42.27deg]">
          <div className="h-0 relative w-[14.866px]" data-node-id="50:80">
            <div className="absolute inset-[-7.36px_-6.73%_-7.36px_0]">
              <img alt="" className="block max-w-none size-full" src={imgArrow1} />
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[147px] not-italic text-[24px] text-white top-[1897px] whitespace-nowrap" data-node-id="50:81">
        MANIFESTO
      </p>
      <div className="absolute flex h-[10px] items-center justify-center left-[296px] top-[1920px] w-[11px]">
        <div className="flex-none rotate-[42.27deg]">
          <div className="h-0 relative w-[14.866px]" data-node-id="50:82">
            <div className="absolute inset-[-7.36px_-6.73%_-7.36px_0]">
              <img alt="" className="block max-w-none size-full" src={imgArrow2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[826px] size-[27px] top-[2765px]" data-name="Frame" data-node-id="50:95">
        <img alt="" className="absolute block max-w-none size-full" src={imgFrame} />
      </div>
      <div className="absolute left-[217px] size-[27px] top-[5164px]" data-name="Frame" data-node-id="59:163">
        <img alt="" className="absolute block max-w-none size-full" src={imgFrame} />
      </div>
      <div className="absolute left-[123px] size-[680px] top-[2983px]" data-node-id="50:99">
        <img alt="" className="absolute block max-w-none size-full" src={imgEllipse10} />
      </div>
      <div className="absolute left-[476px] size-[680px] top-[2983px]" data-node-id="50:100">
        <img alt="" className="absolute block max-w-none size-full" src={imgEllipse10} />
      </div>
      <div className="absolute flex h-[403.699px] items-center justify-center left-0 top-[3267px] w-[1279.046px]">
        <div className="flex-none rotate-[17.52deg]">
          <div className="h-0 relative w-[1341.243px]" data-node-id="50:104">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[403.699px] items-center justify-center left-[0.63px] top-[3122.67px] w-[1279.046px]">
        <div className="-scale-y-100 flex-none rotate-[-17.52deg]">
          <div className="h-0 relative w-[1341.243px]" data-node-id="50:106">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[0.93px] top-[3397.5px] w-[1279.141px]" data-node-id="50:108">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine3} />
        </div>
      </div>
      <div className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[218px] not-italic text-[20px] text-white top-[3253px] whitespace-nowrap" data-node-id="54:109">
        <p className="mb-0">WE'RE SMALL</p>
        <p>STUDENT-LED</p>
      </div>
      <div className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[948px] not-italic text-[20px] text-white top-[3253px] whitespace-nowrap" data-node-id="54:111">
        <p className="mb-0">AND WE'RE</p>
        <p>INDIA BORN</p>
      </div>
      <div className="-translate-x-1/2 absolute h-[434px] left-[calc(50%-0.5px)] top-[3092px] w-[369px]" data-node-id="54:110">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle26} />
      </div>
      <div className="absolute font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[68.4050064086914%] left-[calc(50%-560px)] text-[180px] text-white top-[3883px] w-[1018px] whitespace-pre-wrap" data-node-id="56:115" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">{`WHAT `}</p>
        <p>WE CAN DO</p>
      </div>
      <p className="absolute font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[68.4050064086914%] left-[620px] text-[12px] text-white top-[3888px] whitespace-nowrap" data-node-id="59:121" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        (SRVS)
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[normal] left-[calc(50%+102px)] not-italic text-[#6b6b6b] text-[24px] top-[3936px] w-[452px]" data-node-id="56:116">{`"Turning static into substance. Tech solutions that refuse to blend in."`}</p>
      <div className="absolute h-0 left-[39px] top-[4254px] w-[1190.007px]" data-node-id="59:122">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine4} />
        </div>
      </div>
      <div className="absolute h-0 left-[39px] top-[4542px] w-[1190.007px]" data-node-id="59:129">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine4} />
        </div>
      </div>
      <p className="absolute font-['Bricolage_Grotesque:Regular',sans-serif] font-normal leading-[0.821] left-[39px] text-[36px] text-white top-[4288px] whitespace-nowrap" data-node-id="59:123" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        01
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[0.821] left-[217px] not-italic text-[36px] text-white top-[4288px] whitespace-nowrap" data-node-id="59:124">
        MARKETING STRATEGY
      </p>
      <p className="absolute font-['Bricolage_Grotesque:Regular',sans-serif] font-normal leading-[0.821] left-[39px] text-[36px] text-white top-[4576px] whitespace-nowrap" data-node-id="59:131" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        02
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[0.821] left-[217px] not-italic text-[36px] text-white top-[4576px] whitespace-nowrap" data-node-id="59:132">
        UI/UX DESIGN
      </p>
      <div className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[0.821] left-[44px] not-italic text-[16px] text-white top-[4476px] whitespace-nowrap" data-node-id="59:125">
        <p className="mb-0">Complete solution</p>
        <p>from 0 to 100%</p>
      </div>
      <div className="absolute bg-[#22fb55] border border-solid border-white h-[45px] left-[292px] rounded-[38px] top-[4457px] w-[184px]" data-node-id="59:126" />
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[0.821] left-[315px] not-italic text-[16px] text-black top-[4475px] whitespace-nowrap" data-node-id="59:127">
        LEAVE A REQEUST
      </p>
      <div className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[1.11] left-[682px] not-italic text-[20px] text-white top-[4288px] w-[444px] whitespace-pre-wrap" data-node-id="59:128">
        <p className="mb-0">{`We don't just follow trends; we make them look like ancient history. In a world drowning in static, quiet brands don't just fade—they die. Your brand deserves to be unignorable, and we're here to turn up the volume until the competition is just background noise.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{` It's time to stop blending in and start getting loud. Just send a simple "hi" our way, and we'll show you exactly `}</p>
      </div>
      <div className="absolute flex items-center justify-center left-[1189px] size-[25px] top-[4293px]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[25px]" data-name="Frame" data-node-id="59:134">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame1} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1178px] size-[25px] top-[4581px]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[25px]" data-name="Frame" data-node-id="59:138">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame1} />
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[39px] top-[4640px] w-[1190.007px]" data-node-id="59:142">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine4} />
        </div>
      </div>
      <p className="absolute font-['Bricolage_Grotesque:Regular',sans-serif] font-normal leading-[0.821] left-[39px] text-[36px] text-white top-[4674px] whitespace-nowrap" data-node-id="59:143" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        03
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[0.821] left-[217px] not-italic text-[36px] text-white top-[4674px] whitespace-nowrap" data-node-id="59:144">
        WEB-DEVELOPMENT
      </p>
      <div className="absolute flex items-center justify-center left-[1178px] size-[25px] top-[4679px]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[25px]" data-name="Frame" data-node-id="59:145">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame1} />
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[39px] top-[4738px] w-[1190.007px]" data-node-id="59:149">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine4} />
        </div>
      </div>
      <p className="absolute font-['Bricolage_Grotesque:Regular',sans-serif] font-normal leading-[0.821] left-[39px] text-[36px] text-white top-[4772px] whitespace-nowrap" data-node-id="59:150" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        04
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[0.821] left-[217px] not-italic text-[36px] text-white top-[4772px] whitespace-nowrap" data-node-id="59:151">
        APP DEVELOPMENT
      </p>
      <div className="absolute flex items-center justify-center left-[1178px] size-[25px] top-[4777px]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[25px]" data-name="Frame" data-node-id="59:152">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame1} />
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[39px] top-[4836px] w-[1190.007px]" data-node-id="59:156">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine4} />
        </div>
      </div>
      <p className="absolute font-['Bricolage_Grotesque:Regular',sans-serif] font-normal leading-[0.821] left-[39px] text-[36px] text-white top-[4870px] whitespace-nowrap" data-node-id="59:157" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        05
      </p>
      <p className="absolute font-['Diamond_Grotesk:Regular',sans-serif] leading-[0.821] left-[217px] not-italic text-[36px] text-white top-[4870px] whitespace-nowrap" data-node-id="59:158">
        BRANDING
      </p>
      <div className="absolute flex items-center justify-center left-[1178px] size-[25px] top-[4875px]">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[25px]" data-name="Frame" data-node-id="59:159">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame1} />
          </div>
        </div>
      </div>
    </div>
  );
}
