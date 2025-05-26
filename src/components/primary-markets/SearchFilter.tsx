import React from "react";

interface SearchFilterProps {
  onSearch?: (query: string) => void;
  onFilter?: () => void;
}

export function SearchFilter({ onSearch, onFilter }: SearchFilterProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="bg-[rgba(249,249,255,1)] flex w-full gap-2.5 flex-wrap px-10 py-[15px] border-t-2 border-white max-md:max-w-full max-md:px-5">
      <div className="justify-center items-stretch border border-[color:var(--Color-Primary-Blue-200,#CCCCD6)] bg-white flex min-w-60 min-h-10 flex-col w-[400px] pr-[var(--Spacing-4,] pl-[var(--Spacing-4,] pt-2.5 pb-[12px)] rounded-[10px] border-solid">
        <div className="items-center flex w-full gap-2">
          <div className="self-stretch flex min-h-5 flex-col items-center justify-center w-5 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e7586c4022d5e4e4792e61a09346d2607c8b6d7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4"
            />
          </div>
          <input
            type="text"
            placeholder="Search by scrip name, type or status"
            className="text-[#9999AB] text-sm font-normal leading-[1.4] self-stretch my-auto bg-transparent border-none outline-none w-full"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="flex min-w-60 gap-2.5 flex-1 shrink basis-6 max-md:max-w-full">
        <button 
          className="aspect-[1] object-contain w-10 cursor-pointer"
          onClick={onFilter}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b9a08258d46fc58dd2309c12bcfd21d87338733?placeholderIfAbsent=true"
            className="w-full h-full"
            alt="Filter"
          />
        </button>
      </div>
    </div>
  );
}
