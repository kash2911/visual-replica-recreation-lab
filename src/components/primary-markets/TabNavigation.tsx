import React from "react";

interface TabItem {
  label: string;
  count?: number;
  isActive?: boolean;
}

interface PrimaryTab extends TabItem {
  id: string;
}

interface SecondaryTab extends TabItem {
  id: string;
}

interface TabNavigationProps {
  primaryTabs: PrimaryTab[];
  secondaryTabs: SecondaryTab[];
  onPrimaryTabChange?: (tabId: string) => void;
  onSecondaryTabChange?: (tabId: string) => void;
}

export function TabNavigation({
  primaryTabs,
  secondaryTabs,
  onPrimaryTabChange,
  onSecondaryTabChange,
}: TabNavigationProps) {
  return (
    <>
      <div className="bg-[rgba(243,245,255,1)] flex min-h-20 w-full items-center gap-5 overflow-hidden font-normal flex-wrap px-10 rounded-[10px_10px_0px_0px] max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-h-10 items-center gap-2.5 text-base text-[#456BF0] my-auto pr-[15px] rounded-[20px]">
          <div className="text-[#456BF0] self-stretch gap-2 my-auto">
            Primary Markets
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d8f76b25fd582636372a61f3b3864fec4147146?placeholderIfAbsent=true"
            className="aspect-[1.8] object-contain w-[9px] fill-[#696682] self-stretch shrink-0 my-auto"
          />
        </div>
        <div className="border bg-[#B2B2C2] self-stretch w-0 shrink-0 h-[30px] my-auto border-[rgba(178,178,194,1)] border-solid" />
        <div className="self-stretch flex min-w-60 min-h-10 gap-[30px] overflow-hidden flex-wrap flex-1 shrink basis-[15px] my-auto max-md:max-w-full">
          {primaryTabs.map((tab) => (
            <div 
              key={tab.id}
              className={`flex min-h-10 items-center gap-0.5 whitespace-nowrap justify-center py-2.5 rounded-[4px_4px_0px_0px] ${
                tab.isActive ? "bg-[rgba(251,251,255,1)] border border-[rgba(209,209,247,1)] border-solid rounded-[40px]" : ""
              }`}
              onClick={() => onPrimaryTabChange && onPrimaryTabChange(tab.id)}
            >
              <div
                className={`text-[15px] self-stretch my-auto ${
                  tab.isActive ? "text-[#151D2A]" : "text-[#8280A3]"
                }`}
              >
                {tab.label}
              </div>
              {tab.count !== undefined && (
                <div
                  className={`text-sm self-stretch my-auto ${
                    tab.isActive ? "text-[rgba(21,29,42,1)]" : "text-[rgba(130,128,163,1)]"
                  }`}
                >
                  ({tab.count})
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch text-sm text-[#B4B3C8] font-medium leading-[1.4] justify-center pt-5 px-10 border-white border-solid border-2 max-md:max-w-full max-md:px-5">
        <div className="items-center border-b-[color:var(--Nuvama-Blue-Nuvama-Blue-1000,#E6E6EB)] flex w-full gap-6 border-b border-solid max-md:max-w-full">
          <div className="self-stretch flex min-w-60 gap-6 my-auto max-md:max-w-full">
            {secondaryTabs.map((tab) => (
              <div
                key={tab.id}
                className={`justify-center items-stretch flex flex-col w-auto gap-1 ${
                  tab.isActive ? "text-[#03002F]" : "text-[#B4B3C8]"
                }`}
                onClick={() => onSecondaryTabChange && onSecondaryTabChange(tab.id)}
              >
                <div className={`w-full pr-[var(--Spacing-1,] pl-[var(--Spacing-1,] pt-0 pb-[2px)] ${
                  tab.isActive ? "text-[#03002F]" : "text-[#B4B3C8]"
                }`}>
                  {tab.label} {tab.count !== undefined && `(${tab.count})`}
                </div>
                {tab.isActive && (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea56ae7b0dcf3bf29b96ad1607d125a0a6506648?placeholderIfAbsent=true"
                    className="object-contain w-full stroke-[2px] stroke-[#6374D4] mt-1"
                  />
                )}
                {!tab.isActive && <div className="flex min-h-0 w-full mt-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
