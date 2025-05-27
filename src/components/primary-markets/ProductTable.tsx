import React, { useState } from "react";
import { ProductRow } from "./ProductRow";

interface TableHeaderProps {
  label: string;
  sortable?: boolean;
  onSort?: () => void;
  className?: string;
  isSorted?: boolean;
  sortDirection?: 'asc' | 'desc';
}

function TableHeader({ 
  label, 
  sortable = true, 
  onSort, 
  className = "", 
  isSorted = false,
  sortDirection = 'asc'
}: TableHeaderProps) {
  return (
    <div className={`bg-[rgba(245,246,246,1)] flex min-h-11 w-full items-center border-[rgba(227,227,227,1)] border-b px-3 py-3 ${className}`}>
      <div className="text-[#828096] text-xs font-medium leading-[1.2] flex-1">
        {label}
      </div>
      {sortable && (
        <div 
          className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer ml-1"
          onClick={onSort}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/541301c42c0492776851e44b59e5cc8c450f203f?placeholderIfAbsent=true"
            className={`w-[7px] h-1 ${isSorted && sortDirection === 'asc' ? 'opacity-100' : 'opacity-50'}`}
            alt="Sort ascending"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4e5f8280376f6846e8ba5a8f8eb3cfd512d0df?placeholderIfAbsent=true"
            className={`w-[7px] h-1 ${isSorted && sortDirection === 'desc' ? 'opacity-100' : 'opacity-50'}`}
            alt="Sort descending"
          />
        </div>
      )}
    </div>
  );
}

interface Product {
  id: string;
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
}

interface ProductTableProps {
  products: Product[];
  onPlaceOrder?: (productId: string) => void;
}

export function ProductTable({ products, onPlaceOrder }: ProductTableProps) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSelectProduct = (productId: string, selected: boolean) => {
    if (selected) {
      setSelectedProducts(prev => [...prev, productId]);
    } else {
      setSelectedProducts(prev => prev.filter(id => id !== productId));
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handlePlaceOrder = (productId: string) => {
    if (onPlaceOrder) {
      onPlaceOrder(productId);
    }
  };

  return (
    <div className="w-full mt-6 px-7 max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full items-center flex-wrap max-md:max-w-full">
          {/* Checkbox Header */}
          <div className="self-stretch w-12 my-auto max-md:hidden">
            <div className="bg-[rgba(245,246,246,1)] min-h-11 w-full flex items-center justify-center border-[rgba(227,227,227,1)] border-b px-3 py-3">
              <input 
                type="checkbox" 
                className="rounded bg-white border w-5 h-5 border-[rgba(209,209,247,1)] border-solid"
                checked={selectedProducts.length === products.length && products.length > 0}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedProducts(products.map(p => p.id));
                  } else {
                    setSelectedProducts([]);
                  }
                }}
              />
            </div>
          </div>

          {/* Company Name Header */}
          <div className="self-stretch min-w-60 w-[280px] my-auto">
            <TableHeader 
              label="Company Name" 
              onSort={() => handleSort('companyName')}
              isSorted={sortField === 'companyName'}
              sortDirection={sortDirection}
            />
          </div>

          {/* Rating Header */}
          <div className="self-stretch w-[148px] my-auto">
            <TableHeader 
              label="Rating" 
              onSort={() => handleSort('rating')}
              isSorted={sortField === 'rating'}
              sortDirection={sortDirection}
            />
          </div>

          {/* Dates Header */}
          <div className="self-stretch w-[132px] my-auto">
            <div className="bg-[rgba(245,246,246,1)] flex min-h-11 w-full items-center border-[rgba(227,227,227,1)] border-b px-3 py-3">
              <div className="text-[#828096] text-xs font-medium leading-[14px] flex-1">
                Open date - <br />
                Close date
              </div>
              <div 
                className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer ml-1"
                onClick={() => handleSort('dates')}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/541301c42c0492776851e44b59e5cc8c450f203f?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort ascending"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4e5f8280376f6846e8ba5a8f8eb3cfd512d0df?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort descending"
                />
              </div>
            </div>
          </div>

          {/* Coupon Rate Header */}
          <div className="self-stretch w-[89px] my-auto">
            <div className="bg-[rgba(245,246,246,1)] flex min-h-11 w-full items-center justify-end border-[rgba(227,227,227,1)] border-b px-3 py-3">
              <div className="text-[#828096] text-right text-xs font-medium leading-[14px] flex-1">
                Coupon <br />
                Rate (%)
              </div>
              <div 
                className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer ml-1"
                onClick={() => handleSort('couponRate')}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/541301c42c0492776851e44b59e5cc8c450f203f?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort ascending"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4e5f8280376f6846e8ba5a8f8eb3cfd512d0df?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort descending"
                />
              </div>
            </div>
          </div>

          {/* Min Investment Header */}
          <div className="self-stretch w-[102px] my-auto">
            <div className="bg-[rgba(245,246,246,1)] flex min-h-11 w-full items-center justify-end border-[rgba(227,227,227,1)] border-b px-3 py-3">
              <div className="text-[#828096] text-right text-xs font-medium leading-[1.2] flex-1">
                Min. Inv (₹)
              </div>
              <div 
                className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer ml-1"
                onClick={() => handleSort('minInvestment')}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/541301c42c0492776851e44b59e5cc8c450f203f?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort ascending"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4e5f8280376f6846e8ba5a8f8eb3cfd512d0df?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort descending"
                />
              </div>
            </div>
          </div>

          {/* Estimated Yield Header */}
          <div className="self-stretch w-[89px] my-auto">
            <div className="bg-[rgba(245,246,246,1)] flex min-h-11 w-full items-center justify-end border-[rgba(227,227,227,1)] border-b px-3 py-3">
              <div className="text-[#828096] text-right text-xs font-medium leading-[14px] flex-1">
                Est. <br />
                Yield (%)
              </div>
              <div 
                className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer ml-1"
                onClick={() => handleSort('estimatedYield')}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/541301c42c0492776851e44b59e5cc8c450f203f?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort ascending"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4e5f8280376f6846e8ba5a8f8eb3cfd512d0df?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort descending"
                />
              </div>
            </div>
          </div>

          {/* Payout Frequency Header */}
          <div className="self-stretch w-[106px] my-auto">
            <div className="bg-[rgba(245,246,246,1)] flex min-h-11 w-full items-center border-[rgba(227,227,227,1)] border-b px-3 py-3">
              <div className="text-[#828096] text-xs font-medium leading-[1.2] flex-1">
                Payout Freq
              </div>
              <div 
                className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer ml-1"
                onClick={() => handleSort('payoutFrequency')}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/541301c42c0492776851e44b59e5cc8c450f203f?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort ascending"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce4e5f8280376f6846e8ba5a8f8eb3cfd512d0df?placeholderIfAbsent=true"
                  className="w-[7px] h-1"
                  alt="Sort descending"
                />
              </div>
            </div>
          </div>

          {/* More Actions Header - positioned before Action */}
          <div className="self-stretch w-[60px] my-auto">
            <div className="bg-[rgba(245,246,246,1)] flex min-h-11 w-full items-center justify-center border-[rgba(227,227,227,1)] border-b px-3 py-3">
              {/* Empty header for more actions */}
            </div>
          </div>

          {/* Action Header - moved to the right */}
          <div className="self-stretch text-sm text-[#F04E45] font-medium leading-[1.4] flex-1 my-auto">
            <div className="bg-[rgba(245,246,246,1)] flex min-h-11 w-full items-center justify-end border-[rgba(227,227,227,1)] border-b px-4 py-3">
              <div className="text-[#828096] text-xs font-medium leading-[1.2]">
                Action
              </div>
            </div>
          </div>
        </div>

        {/* Product Rows */}
        {products.map(product => (
          <ProductRow
            key={product.id}
            company={product.company}
            rating={product.rating}
            dates={product.dates}
            couponRate={product.couponRate}
            minInvestment={product.minInvestment}
            estimatedYield={product.estimatedYield}
            payoutFrequency={product.payoutFrequency}
            isSelected={selectedProducts.includes(product.id)}
            onSelectChange={(selected) => handleSelectProduct(product.id, selected)}
            onPlaceOrder={() => handlePlaceOrder(product.id)}
            onMoreActions={() => console.log('More actions for', product.id)}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex w-full items-center gap-[7px] justify-center mt-6 pl-[15px] pr-5 max-md:max-w-full">
        <div className="self-stretch flex min-w-60 min-h-7 w-full items-center gap-[5px] justify-center flex-wrap flex-1 shrink basis-[0%] my-auto py-0.5 rounded-[41px] max-md:max-w-full">
          <button className="text-[#6374D4] text-base font-normal underline decoration-solid decoration-auto underline-offset-auto underline self-stretch my-auto cursor-pointer">
            Load More
          </button>
          <div className="self-stretch flex min-h-4 gap-3 justify-center w-4 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64725c4f495e7f9861bb7d6999d4c5f741976c78?placeholderIfAbsent=true"
              className="aspect-[1.83] object-contain w-[11px] fill-[#6374D4]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
