import React from "react";

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
          <div className="items-center rounded self-stretch flex min-h-7 gap-2 my-auto px-[0p] py-[16px)]">
            <div className="self-stretch my-auto">
              {subtitle}
            </div>
            <div className="rotate-[3.1415925661670165rad] self-stretch flex w-4 shrink-0 h-4 my-auto" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-5 my-auto max-md:max-w-full">
        <div className="self-stretch flex min-w-60 gap-3 my-auto">
          <div className="content-end flex-wrap flex min-w-60 min-h-8 gap-[8px)_var(--Spacing-6,16px;] w-[324px;}]">
            <div className="flex w-4 shrink h-5 grow" />
            <div className="text-[#9999AB] text-sm font-normal leading-[1.4]">
              Search Client / Partner
            </div>
            <div className="min-w-60 grow shrink w-[321px] rounded-[10px]">
              <div className="bg-[rgba(103,103,108,1)] flex shrink-0 h-px rounded-[10px]" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="self-stretch flex items-center gap-[5px] w-10 my-auto rounded-[10px]">
              <div className="self-stretch flex min-h-10 w-10 my-auto" />
            </div>
            <div className="self-stretch flex items-center gap-[5px] w-10 my-auto rounded-[10px]">
              <div className="self-stretch flex min-h-10 w-10 my-auto" />
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
