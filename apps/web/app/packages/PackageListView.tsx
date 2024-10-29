'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { ExternalLink, Search } from "lucide-react";
import Link from 'next/link';
import { Package } from '../types';

const ITEMS_PER_PAGE = 12;

interface PackageListViewProps {
  initialPackages: {
    popular: Package[];
    favorites: Package[];
  };
}

export default function PackageListView({ initialPackages }: PackageListViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  
  // 合并所有包并添加标签
  useEffect(() => {
    const allPackages = [
      ...initialPackages.favorites.map(pkg => ({ ...pkg, type: 'favorite' })),
      ...initialPackages.popular.map(pkg => ({ ...pkg, type: 'popular' }))
    ];
    setFilteredPackages(allPackages as Package[]);
  }, [initialPackages]);

  // 处理搜索和过滤
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const allPackages = [
      ...initialPackages.favorites.map(pkg => ({ ...pkg, type: 'favorite' })),
      ...initialPackages.popular.map(pkg => ({ ...pkg, type: 'popular' }))
    ];
    
    const filtered = allPackages.filter(pkg => 
      pkg.name.toLowerCase().includes(query) ||
      pkg.description.toLowerCase().includes(query) ||
      pkg.publisher.toLowerCase().includes(query)
    );
    
    setFilteredPackages(filtered as Package[]);
    setCurrentPage(1);
  }, [searchQuery, initialPackages]);

  // 计算分页
  const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPackages = filteredPackages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-4 mb-12 max-w-3xl mx-auto transform -translate-y-8">
        <div className="relative">
          <Input
            type="search"
            placeholder="Filter packages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-4 text-lg border-0 bg-transparent focus:ring-0 focus:border-0"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedPackages.map((pkg) => (
          <Card key={pkg.name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle>
                <Link 
                  href={`/package/${encodeURIComponent(pkg.name)}/installing`}
                  className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
                >
                  {pkg.name}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-500">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-xs">{pkg.publisher}</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  pkg.type === 'favorite' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'bg-gray-50 text-gray-600'
                }`}>
                  {pkg.type === 'favorite' ? 'Featured' : 'Popular'}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 分页控件样式 */}
      <div className="flex justify-center gap-3 my-12">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
        
        <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
} 