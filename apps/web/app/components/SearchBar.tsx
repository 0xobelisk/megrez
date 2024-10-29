'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@repo/ui/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/package/${encodeURIComponent(searchQuery.trim())}/installing`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mb-8 relative">
      <Input
        type="search"
        placeholder="Search packages"
        className="w-full py-3 pl-12 pr-4 text-white bg-white bg-opacity-10 rounded-full border-none focus:ring-2 focus:ring-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white opacity-70" />
    </form>
  );
} 