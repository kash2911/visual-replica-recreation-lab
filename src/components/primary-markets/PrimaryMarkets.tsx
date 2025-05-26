import React, { useState } from "react";
import { Header } from "./Header";
import { TabNavigation } from "./TabNavigation";
import { SearchFilter } from "./SearchFilter";
import { ProductTable } from "./ProductTable";

// Mock data for the component
const mockProducts = [
  {
    id: "1",
    company: {
      name: "Indel Money Limited",
      series: "Series 3",
      additionalSeries: 2,
      icon: "I",
      iconBg: "bg-[rgba(209,215,229,1)]",
      iconColor: "text-[rgba(28,55,125,1)]"
    },
    rating: "ICRA AA+/STABLE",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: 10.2,
    minInvestment: "9,00,000",
    estimatedYield: 10,
    payoutFrequency: "Quarterly"
  },
  {
    id: "2",
    company: {
      name: "Samaan Capital Limited",
      series: "Series 1",
      additionalSeries: 7,
      icon: "I",
      iconBg: "bg-[rgba(245,209,233,1)]",
      iconColor: "text-[#BD4B9B]"
    },
    rating: "CRISIL AA/STABLE",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: 10,
    minInvestment: "8,50,000",
    estimatedYield: 9.86,
    payoutFrequency: "Quarterly"
  },
  {
    id: "3",
    company: {
      name: "Care Insurance Limited",
      series: "Series 1",
      additionalSeries: 8,
      icon: "I",
      iconBg: "bg-[rgba(209,215,229,1)]",
      iconColor: "text-[rgba(28,55,125,1)]"
    },
    rating: "ICRA AA+/STABLE",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: "--",
    minInvestment: "7,75,000",
    estimatedYield: 8,
    payoutFrequency: "Quarterly"
  },
  {
    id: "4",
    company: {
      name: "Indel Money Limited",
      series: "Series 4",
      additionalSeries: 6,
      icon: "I",
      iconBg: "bg-[rgba(245,209,233,1)]",
      iconColor: "text-[#BD4B9B]"
    },
    rating: "CRISIL AA-/STABLE",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: 9.5,
    minInvestment: "7,75,000",
    estimatedYield: 7.54,
    payoutFrequency: "Quarterly"
  },
  {
    id: "5",
    company: {
      name: "Indel Money Limited",
      series: "Series 2",
      additionalSeries: 4,
      icon: "I",
      iconBg: "bg-[rgba(209,215,229,1)]",
      iconColor: "text-[rgba(28,55,125,1)]"
    },
    rating: "CRISIL AAA",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: 9.1,
    minInvestment: "6,25,000",
    estimatedYield: 6.4,
    payoutFrequency: "Monthly"
  },
  {
    id: "6",
    company: {
      name: "Muthoot Mini Financiers",
      series: "Series 9",
      additionalSeries: 5,
      icon: "M",
      iconBg: "bg-[rgba(245,209,233,1)]",
      iconColor: "text-[#BD4B9B]"
    },
    rating: "CRISIL AAA",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: 8.5,
    minInvestment: "5,00,000",
    estimatedYield: 6.32,
    payoutFrequency: "Quarterly"
  },
  {
    id: "7",
    company: {
      name: "Care Insurance Limited",
      series: "Series 2",
      additionalSeries: 8,
      icon: "I",
      iconBg: "bg-[rgba(209,215,229,1)]",
      iconColor: "text-[rgba(28,55,125,1)]"
    },
    rating: "ICRA AA+/STABLE",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: "--",
    minInvestment: "7,75,000",
    estimatedYield: 8,
    payoutFrequency: "Quarterly"
  },
  {
    id: "8",
    company: {
      name: "Indel Money Limited",
      series: "Series 4",
      additionalSeries: 6,
      icon: "I",
      iconBg: "bg-[rgba(245,209,233,1)]",
      iconColor: "text-[#BD4B9B]"
    },
    rating: "CRISIL AA-/STABLE",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: 9.5,
    minInvestment: "7,75,000",
    estimatedYield: 7.54,
    payoutFrequency: "Quarterly"
  },
  {
    id: "9",
    company: {
      name: "Indel Money Limited",
      series: "Series 2",
      additionalSeries: 4,
      icon: "I",
      iconBg: "bg-[rgba(209,215,229,1)]",
      iconColor: "text-[rgba(28,55,125,1)]"
    },
    rating: "CRISIL AAA",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: 9.1,
    minInvestment: "6,25,000",
    estimatedYield: 6.4,
    payoutFrequency: "Monthly"
  },
  {
    id: "10",
    company: {
      name: "Indel Money Limited",
      series: "Series 1",
      additionalSeries: 4,
      icon: "I",
      iconBg: "bg-[rgba(245,209,233,1)]",
      iconColor: "text-[#BD4B9B]"
    },
    rating: "CRISIL AAA",
    dates: "01 Sept 24- 24 Oct 24",
    couponRate: 10.5,
    minInvestment: "10,00,000",
    estimatedYield: 12,
    payoutFrequency: "Monthly"
  }
];

export function PrimaryMarkets() {
  const [activeTab, setActiveTab] = useState("primary-ncds");
  const [activeSecondaryTab, setActiveSecondaryTab] = useState("ongoing");
  const [searchQuery, setSearchQuery] = useState("");

  const primaryTabs = [
    { id: "ipo", label: "IPO", count: 90 },
    { id: "nfo", label: "NFO", count: 20 },
    { id: "primary-ncds", label: "Primary NCDs", count: 20, isActive: true }
  ];

  const secondaryTabs = [
    { id: "ongoing", label: "Ongoing", count: 20, isActive: true },
    { id: "upcoming", label: "Upcoming", count: 24 },
    { id: "recently-allotted", label: "Recently Allotted NCDs", count: 14 }
  ];

  const handlePrimaryTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleSecondaryTabChange = (tabId: string) => {
    setActiveSecondaryTab(tabId);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  const handleFilter = () => {
    console.log("Filter button clicked");
  };

  const handlePlaceOrder = (productId: string) => {
    console.log("Place order for product:", productId);
  };

  // Filter products based on search query
  const filteredProducts = searchQuery
    ? mockProducts.filter(product => 
        product.company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.company.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.rating.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockProducts;

  return (
    <div className="gap-8">
      <Header title="Browse Offerings" />
      
      <div className="bg-white w-full gap-6 mt-8 pb-[54px] rounded-[10px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <TabNavigation 
            primaryTabs={primaryTabs}
            secondaryTabs={secondaryTabs}
            onPrimaryTabChange={handlePrimaryTabChange}
            onSecondaryTabChange={handleSecondaryTabChange}
          />
          
          <SearchFilter 
            onSearch={handleSearch}
            onFilter={handleFilter}
          />
        </div>
        
        <ProductTable 
          products={filteredProducts}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
}
