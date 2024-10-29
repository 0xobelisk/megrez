import { Suspense } from 'react';
import PackageList from './components/PackageList';
import SearchBar from './components/SearchBar';
import { getPackages } from './services/packages';

export default async function Page() {
  const packages = await getPackages();

  return (
    <main>
      <div className="min-h-screen bg-white">
        <div className="bg-[#0078D4] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700" />
          
          <main className="relative z-10 flex flex-col items-center justify-center min-h-[500px] px-4">
            <h1 className="text-5xl font-bold mb-4">Package.dev</h1>
            <p className="text-xl mb-8">The official package repository for Sui and Sui dapps.</p>
            
            <Suspense fallback={<div>Loading...</div>}>
              <SearchBar />
            </Suspense>
          </main>
        </div>

        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-4">Move Package Favorites</h2>
          <Suspense fallback={<div>Loading packages...</div>}>
            <PackageList packages={packages} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
