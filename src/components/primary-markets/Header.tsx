import React from "react";
import { Search, Bookmark, Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle = "Wealth Products" }: HeaderProps) {
  return (
    <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
      <div className="self-stretch flex min-w-60 items-center gap-5 leading-[1.4] my-auto max-md:max-w-full">
        <div className="text-white text-[32px] font-normal self-stretch my-auto">
          {title}
        </div>
        <div className="items-center border bg-[#E2EAFF] self-stretch flex min-h-10 gap-5 text-sm text-[#03002F] font-light my-auto rounded-[40px] border-solid border-[#A0C2FF]">
          <div className="items-center rounded self-stretch flex min-h-7 gap-2 my-auto px-4 py-[16px]">
            <div className="self-stretch my-auto">
              {subtitle}
            </div>
            <div className="rotate-[3.1415925661670165rad] self-stretch flex w-4 shrink-0 h-4 my-auto" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-5 my-auto max-md:max-w-full">
        <div className="flex items-center bg-transparent border-b border-gray-400 px-3 py-2 min-w-[300px]">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search Client / Partner"
            className="bg-transparent border-none outline-none text-gray-300 placeholder-gray-400 text-sm font-normal flex-1"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Bookmark className="w-6 h-6 text-white stroke-2" fill="none" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-white stroke-2" fill="none" />
            </div>
          </div>
        </div>
        <div className="self-stretch text-sm text-[#F04E45] font-bold whitespace-nowrap text-center tracking-[0.28px] leading-none w-6 my-auto rounded-[100px]">
          <div className="bg-[rgba(252,219,217,1)] flex items-start w-6 h-6 pl-[5px] pt-[7px]">
            <div className="grow">
              P
            </div>
            <div className="border z-10 flex w-[9px] shrink-0 h-[9px] bg-[#00B274] mt-2 rounded-[100px] border-solid border-[#03002F]" />
          </div>
        </div>
      </div>
    </div>
  );
}
