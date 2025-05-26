import React from "react";

interface ProductRowProps {
  company: {
    name: string;
    series: string;
    additionalSeries: number;
    icon: string;
    iconBg: string;
    iconColor: string;
  };
  rating: string;
  dates: string;
  couponRate: string | number;
  minInvestment: string;
  estimatedYield: string | number;
  payoutFrequency: string;
  onPlaceOrder?: () => void;
  onMoreActions?: () => void;
  isSelected?: boolean;
  onSelectChange?: (selected: boolean) => void;
}

export function ProductRow({
  company,
  rating,
  dates,
  couponRate,
  minInvestment,
  estimatedYield,
  payoutFrequency,
  onPlaceOrder,
  onMoreActions,
  isSelected = false,
  onSelectChange,
}: ProductRowProps) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSelectChange) {
      onSelectChange(e.target.checked);
    }
  };

  return (
    <div className="flex w-full items-center flex-wrap max-md:max-w-full">
      {/* Checkbox Column */}
      <div className="self-stretch w-12 my-auto max-md:hidden">
        <div className="bg-white flex min-h-[72px] w-full max-w-12 flex-col overflow-hidden items-stretch justify-center border-[rgba(227,227,227,1)] border-b">
          <div className="justify-center items-center flex w-full gap-2.5 flex-1 h-full pr-[var(--sds-size-space-300;] pl-[var(--sds-size-space-300;] pt-[24px)] pb-[}]">
            <div className="self-stretch flex w-full flex-col justify-center flex-1 shrink basis-[0%] my-auto p-0.5">
              <input 
                type="checkbox" 
                className="rounded bg-white border flex w-5 shrink-0 h-5 border-[rgba(209,209,247,1)] border-solid"
                checked={isSelected}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Column */}
      <div className="self-stretch min-w-60 w-[280px] my-auto">
        <div className="bg-white flex min-h-[72px] w-full flex-col items-stretch justify-center border-[rgba(227,227,227,1)] border-b">
          <div className="flex w-full gap-2 flex-1 h-full px-4 py-3.5">
            <div className={`min-h-10 text-lg font-medium whitespace-nowrap w-10 h-10 px-2.5 rounded-xl ${company.iconBg} ${company.iconColor}`}>
              {company.icon}
            </div>
            <div className="flex flex-col items-stretch text-sm leading-[1.4] justify-center flex-1 shrink basis-5">
              <div className="text-[#292663] self-stretch max-w-full w-48 gap-2.5 font-medium">
                {company.name} - {company.series}
              </div>
              <div className="text-[#4F4D6E] self-stretch max-w-full w-48 gap-2.5 font-light mt-1">
                {company.additionalSeries} More Series
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Column */}
      <div className="self-stretch w-[148px] my-auto">
        <div className="bg-white min-h-[72px] w-full text-sm text-[#696682] font-normal leading-[1.4] border-[rgba(227,227,227,1)] border-b">
          <div className="items-stretch flex w-full flex-col justify-center flex-1 px-[12p] py-[14px)]">
            <div className="text-[#696682] self-stretch w-full gap-2.5">
              {rating}
            </div>
          </div>
        </div>
      </div>

      {/* Dates Column */}
      <div className="self-stretch w-[132px] my-auto">
        <div className="bg-white min-h-[72px] w-full text-sm text-[#696682] font-normal leading-5 px-2.5 border-[rgba(227,227,227,1)] border-b">
          <div className="items-stretch flex w-full flex-col justify-center flex-1 px-[16p] py-[14px)]">
            <div className="text-[#696682] self-stretch flex-1 shrink basis-[0%] w-full gap-2.5">
              {dates}
            </div>
          </div>
        </div>
      </div>

      {/* Coupon Rate Column */}
      <div className="self-stretch w-[89px] my-auto">
        <div className="bg-white min-h-[72px] w-full text-sm text-[#828096] font-normal whitespace-nowrap text-right leading-[1.2] border-[rgba(227,227,227,1)] border-b">
          <div className="flex w-full gap-2 flex-1 h-full px-[16p] py-[14px)]">
            <div className="text-[#828096] self-stretch min-h-5 w-full gap-2.5 flex-1 shrink basis-[0%]">
              {couponRate}
            </div>
          </div>
        </div>
      </div>

      {/* Min Investment Column */}
      <div className="self-stretch w-[102px] my-auto">
        <div className="bg-white min-h-[72px] w-full text-sm text-[#828096] font-medium whitespace-nowrap text-right leading-[1.2] border-[rgba(227,227,227,1)] border-b">
          <div className="flex w-full gap-2 flex-1 h-full px-[16p] py-[14px)]">
            <div className="text-[#828096] self-stretch w-full min-h-5 gap-2.5 flex-1 shrink basis-[0%]">
              {minInvestment}
            </div>
          </div>
        </div>
      </div>

      {/* Estimated Yield Column */}
      <div className="self-stretch w-[89px] my-auto">
        <div className="bg-white min-h-[72px] w-full text-sm text-[#828096] font-normal whitespace-nowrap text-right leading-[1.2] border-[rgba(227,227,227,1)] border-b">
          <div className="flex w-full gap-2 flex-1 h-full px-[16p] py-[14px)]">
            <div className="text-[#828096] self-stretch min-h-5 w-full gap-2.5 flex-1 shrink basis-[0%]">
              {estimatedYield}
            </div>
          </div>
        </div>
      </div>

      {/* Payout Frequency Column */}
      <div className="self-stretch w-[106px] my-auto">
        <div className="bg-white min-h-[72px] w-full text-sm text-[#696682] font-normal whitespace-nowrap leading-[1.4] border-[rgba(227,227,227,1)] border-b">
          <div className="items-stretch flex w-full flex-col justify-center flex-1 px-[16p] py-[14px)]">
            <div className="text-[#696682] self-stretch flex-1 shrink basis-[0%] w-full gap-2.5">
              {payoutFrequency}
            </div>
          </div>
        </div>
      </div>

      {/* Action Column */}
      <div className="self-stretch text-sm text-[#F04E45] font-medium leading-[1.4] w-[158px] my-auto">
        <div className="bg-white flex min-h-[72px] w-full flex-col items-stretch text-center justify-center border-[rgba(227,227,227,1)] border-b">
          <div className="flex w-full gap-[var(--sds-size-space-200)] flex-1 h-full px-4 py-3.5">
            <button 
              className="self-stretch flex-1 shrink basis-[0%] min-w-24 border min-h-8 w-full gap-3 overflow-hidden pr-[var(--Spacing-8,] pl-[}] pt-[4px)] pb-[24px;] rounded-[100px] border-solid border-[#F04E45] max-md:px-5 cursor-pointer"
              onClick={onPlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* More Actions Column */}
      <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
        <div className="bg-white flex min-h-[72px] w-full flex-col items-stretch justify-center border-[rgba(227,227,227,1)] border-b">
          <div className="flex w-full gap-[var(--sds-size-space-200)] flex-1 h-full pl-3 pr-4 py-3.5">
            <div className="items-center flex gap-[var(--sds-size-space-100)]">
              <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
              <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
              <div className="self-stretch flex items-center gap-2.5 w-6 my-auto">
                <button 
                  className="self-stretch w-6 overflow-hidden my-auto px-0.5 cursor-pointer"
                  onClick={onMoreActions}
                >
                  <div className="flex w-full shrink-0 h-6 rounded-[100px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
