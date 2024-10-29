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
        className="w-full h-12 pl-12 pr-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-white placeholder:text-white/70 focus:border-white/40 focus:ring-2 focus:ring-white/20"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
    </form>
  );
} 