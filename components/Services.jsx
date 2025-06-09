import react from "react";
import Block from "@/components/Block";

import {
  LuBuilding,
  LuFileText,
  LuAward,
  LuHandshake,
  LuBookOpen,
  LuGraduationCap,
} from "react-icons/lu";

import card from "@/data/services.json";

export default function Services() {
  return (
    <div className="bg-[#122344] max-w-[1320px] py-10">
      <div className="mx-auto text-center py-[60px]">
        <div className="uppercase text-[#E04448] mb-3 text-[16px] font-bold">
          our services
        </div>
        <div className="mb-[36px]">
          <h1 className="capitalize font-extrabold text-[36px]">
            <span className=" border-b-3 border-[#E04448]">comprehens</span>ive
            education consulting
          </h1>
        </div>
        <div className="text-[18px] mt-[30px] ml-[8px] text-[#FFFFFFCC]">
          We guide students through every step of the international education
          journey.
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-6">
        <Block
          title={card[0].title}
          desc={card[0].desc}
          icon={<LuBuilding />}
        />
        <Block
          title={card[1].title}
          desc={card[1].desc}
          icon={<LuFileText />}
        />
        <Block title={card[2].title} desc={card[2].desc} icon={<LuAward />} />
        <Block
          title={card[3].title}
          desc={card[3].desc}
          icon={<LuHandshake />}
        />
        <Block
          title={card[4].title}
          desc={card[4].desc}
          icon={<LuBookOpen />}
        />
        <Block
          title={card[5].title}
          desc={card[5].desc}
          icon={<LuGraduationCap />}
        />
      </div>
    </div>
  );
}
