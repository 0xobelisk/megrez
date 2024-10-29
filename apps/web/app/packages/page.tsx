import { Suspense } from 'react';
import { getPackages } from '../services/packages';
import PackageListView from './PackageListView';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default async function Page() {
  const packages = await getPackages();
  
  return (
    <main className="min-h-screen">
      <div className="bg-[#3B82F6] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-100 hover:text-white mb-8 text-sm font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold">All Packages</h1>
            <p className="text-lg text-blue-100 mt-4">
              Browse and search all available packages
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <Suspense fallback={<div>Loading packages...</div>}>
          <PackageListView initialPackages={packages} />
        </Suspense>
      </div>
    </main>
  );
}