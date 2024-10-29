'use client';

import { usePathname } from 'next/navigation';
import { ExternalLink, Heart, Home } from "lucide-react";
import Link from 'next/link';

export default function Page() {
  const pathname = usePathname();
  const currentTab = pathname.split('/').pop() || 'installing';

  return (
    <main className="container mx-auto p-4 max-w-7xl">
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-500 mb-4">
        <Home className="w-4 h-4 mr-2" />
        <span>Back to Home</span>
      </Link>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">dubhe 1.0.0</h1>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <span>Published 1 months ago • </span>
            <a href="https://suiscan.xyz/testnet/account/0x59a5fbf2c56da3a4a2ac761f062cb0e8ed6c6cb1812136178cf2321586736cc7/activity" className="text-blue-600 hover:underline">dubhe.sui</a>
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Move 2024 Beta</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <Heart className="text-gray-400" />
              <span className="text-xl font-semibold">1,432</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => window.open('#staking-modal', '_blank')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
            >
              <span>Vote & Stake</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {['Framework', 'DApp', 'Sui'].map((tag) => (
          <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{tag}</span>
        ))}
      </div>

      <div className="border-b mb-4">
        <nav className="flex">
          {['Installing'].map((tab) => (
            <Link 
              key={tab} 
              href={`/package/${encodeURIComponent('dubhe')}/${tab.toLowerCase()}`}
              className={`px-4 py-2 ${tab.toLowerCase() === currentTab ? 'border-b-2 border-blue-500' : ''}`}
            >
              {tab}
            </Link>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Use this package as a dependency</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">Depend on it</h3>
                <p className="mb-3 text-gray-700">Run this command:</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">With Dubhe CLI:</h4>
                  <pre className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    $ dubhe add dubhe
                  </pre>
                </div>

                <p className="mb-3 text-gray-700">This will add a line like this to your package's Move.toml:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="font-mono text-sm overflow-x-auto">
                    <code>{`[dependencies]
Sui = { 
  git = "https://github.com/MystenLabs/sui.git", 
  subdir = "crates/sui-framework/packages/sui-framework", 
  rev = "mainnet-v1.19.1" 
}
Dubhe = { 
  git = "https://github.com/0xobelisk/dubhe-engine.git", 
  subdir = "packages/dubhe-framework", 
   rev = "main" 
}
[addresses]
sui = "0x2"
dubhe = "0x3dc2d6239eed38c9798444afbf4bada0998ec9 `
                  }
                  </code>
                  </pre>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4 sticky top-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Package Info</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Test Coverage</span>
                  <span className="font-semibold">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Line Coverage</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Branch Coverage</span>
                  <span className="font-semibold">70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Function Coverage</span>
                  <span className="font-semibold">90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Statement Coverage</span>
                  <span className="font-semibold">88%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Publisher</h3>
              <a href="https://suiscan.xyz/testnet/account/0x59a5fbf2c56da3a4a2ac761f062cb0e8ed6c6cb1812136178cf2321586736cc7/activity" className="text-blue-600 hover:underline flex items-center">
                dubhe.sui
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Verifier</h3>
              <a href="https://suiscan.xyz/testnet/account/0x59a5fbf2c56da3a4a2ac761f062cb0e8ed6c6cb1812136178cf2321586736cc7/activity" className="text-blue-600 hover:underline flex items-center">
                dubhe.sui
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Repository</h3>
              <a href="https://github.com/0xobelisk/obelisk-engine/tree/main/packages/obelisk-framework" className="text-blue-600 hover:underline flex items-center">
                GitHub
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Metadata</h3>
              <p className="text-sm text-gray-600">Dubhe is a modular application development engine composed of a series of toolchains and libraries.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Security Audit</h3>
              <a href="https://osec.io/" className="text-blue-600 hover:underline flex items-center">
                OtterSec
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Dependencies</h3>
              <a href="https://suiscan.xyz/testnet/object/0x0000000000000000000000000000000000000000000000000000000000000002/contracts" className="text-blue-600 hover:underline flex items-center">
                Sui
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
