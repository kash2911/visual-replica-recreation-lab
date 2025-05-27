
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
        <div className="bg-white flex min-h-[72px] w-full flex-col justify-center border-[rgba(227,227,227,1)] border-b px-3 py-6">
          <div className="flex justify-center items-center">
            <input 
              type="checkbox" 
              className="rounded bg-white border w-5 h-5 border-[rgba(209,209,247,1)] border-solid"
              checked={isSelected}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>

      {/* Company Column */}
      <div className="self-stretch min-w-60 w-[280px] my-auto">
        <div className="bg-white flex min-h-[72px] w-full items-center border-[rgba(227,227,227,1)] border-b px-4 py-6">
          <div className={`min-h-10 text-lg font-medium whitespace-nowrap w-10 h-10 flex items-center justify-center rounded-xl ${company.iconBg} ${company.iconColor}`}>
            {company.icon}
          </div>
          <div className="flex flex-col ml-3 flex-1">
            <div className="text-[#292663] text-sm font-medium leading-[1.4]">
              {company.name} - {company.series}
            </div>
            <div className="text-[#4F4D6E] text-sm font-light leading-[1.4] mt-1">
              {company.additionalSeries} More Series
            </div>
          </div>
        </div>
      </div>

      {/* Rating Column */}
      <div className="self-stretch w-[148px] my-auto">
        <div className="bg-white min-h-[72px] w-full flex items-center border-[rgba(227,227,227,1)] border-b px-3 py-6">
          <div className="text-[#696682] text-sm font-normal leading-[1.4] w-full">
            {rating}
          </div>
        </div>
      </div>

      {/* Dates Column */}
      <div className="self-stretch w-[132px] my-auto">
        <div className="bg-white min-h-[72px] w-full flex items-center border-[rgba(227,227,227,1)] border-b px-3 py-6">
          <div className="text-[#696682] text-sm font-normal leading-[1.4] w-full">
            {dates}
          </div>
        </div>
      </div>

      {/* Coupon Rate Column */}
      <div className="self-stretch w-[89px] my-auto">
        <div className="bg-white min-h-[72px] w-full flex items-center justify-end border-[rgba(227,227,227,1)] border-b px-3 py-6">
          <div className="text-[#828096] text-sm font-normal text-right leading-[1.2]">
            {couponRate}
          </div>
        </div>
      </div>

      {/* Min Investment Column */}
      <div className="self-stretch w-[102px] my-auto">
        <div className="bg-white min-h-[72px] w-full flex items-center justify-end border-[rgba(227,227,227,1)] border-b px-3 py-6">
          <div className="text-[#828096] text-sm font-medium text-right leading-[1.2]">
            {minInvestment}
          </div>
        </div>
      </div>

      {/* Estimated Yield Column */}
      <div className="self-stretch w-[89px] my-auto">
        <div className="bg-white min-h-[72px] w-full flex items-center justify-end border-[rgba(227,227,227,1)] border-b px-3 py-6">
          <div className="text-[#828096] text-sm font-normal text-right leading-[1.2]">
            {estimatedYield}
          </div>
        </div>
      </div>

      {/* Payout Frequency Column */}
      <div className="self-stretch w-[106px] my-auto">
        <div className="bg-white min-h-[72px] w-full flex items-center border-[rgba(227,227,227,1)] border-b px-3 py-6">
          <div className="text-[#696682] text-sm font-normal leading-[1.4] w-full">
            {payoutFrequency}
          </div>
        </div>
      </div>

      {/* More Actions Column - positioned before Place Order */}
      <div className="self-stretch w-[60px] my-auto">
        <div className="bg-white flex min-h-[72px] w-full items-center justify-center border-[rgba(227,227,227,1)] border-b px-3 py-6">
          <button 
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={onMoreActions}
          >
            <div className="w-1 h-1 bg-gray-400 rounded-full mx-0.5"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full mx-0.5"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full mx-0.5"></div>
          </button>
        </div>
      </div>

      {/* Action Column - Place Order moved to the right */}
      <div className="self-stretch text-sm text-[#F04E45] font-medium leading-[1.4] flex-1 ml-auto my-auto">
        <div className="bg-white flex min-h-[72px] w-full items-center justify-end border-[rgba(227,227,227,1)] border-b px-4 py-6">
          <button 
            className="min-w-24 border min-h-8 px-4 py-1 rounded-full border-solid border-[#F04E45] cursor-pointer"
            onClick={onPlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
