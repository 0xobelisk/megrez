'use client';

import { ExternalLink, Heart, Home } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PackageDetailsProps {
  packageDetails: {
    name: string;
    version: string;
    description: string;
    publisher: string;
    repository: string;
    tags: string[];
    dependencies: {
      [key: string]: string;
    };
    coverage: {
      test: number;
      line: number;
      branch: number;
      function: number;
      statement: number;
    };
    verifier: string;
    metadata: string;
  };
}

export default function PackageDetails({ packageDetails }: PackageDetailsProps) {
  const pathname = usePathname();
  const currentTab = pathname.split('/').pop();

  const handleStakeClick = () => {
    window.open('#staking-modal', '_blank');
  };

  const moveTomlContent = `[dependencies]
Sui = {
  git = "https://github.com/MystenLabs/sui.git",
  subdir = "crates/sui-framework/packages/sui-framework",
  rev = "mainnet-v1.19.1"
}
${packageDetails.name} = {
  git = "${packageDetails.repository}",
  subdir = "packages/${packageDetails.name.toLowerCase()}-framework",
  rev = "main"
}
[addresses]
sui = "0x2"
dubhe = "0x3dc2d6239eed38c9798444afbf4bada0998ec9"`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-500 mb-6">
        <Home className="w-4 h-4 mr-2" />
        <span>Back to Home</span>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{packageDetails.name} {packageDetails.version}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Published 1 months ago</span>
          <span>•</span>
          <a href={`https://suiscan.xyz/testnet/account/${packageDetails.publisher}`} 
             className="text-blue-600 hover:underline">{packageDetails.publisher}</a>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Move 2024 Beta</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {packageDetails.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">{tag}</span>
        ))}
      </div>

      <div className="border-b border-gray-200 mb-8">
        <nav className="flex gap-4">
          <Link
            href={`/package/${packageDetails.name}/installing`}
            className={`pb-4 px-2 ${currentTab === 'installing' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          >
            Installing
          </Link>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Use this package as a dependency</h2>
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4">Depend on it</h3>
                <p className="text-gray-700 mb-4">Run this command:</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">With Dubhe CLI:</h4>
                  <pre className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    $ dubhe add {packageDetails.name}
                  </pre>
                </div>
                <p className="text-gray-700 mb-4">This will add these lines to your package's Move.toml:</p>
                <pre className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>{moveTomlContent}</code>
                </pre>
              </section>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">1,432</span>
              </button>
              <button
                onClick={handleStakeClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
              >
                Vote & Stake
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Package Info</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Test Coverage</span>
                  <span className="font-semibold">{packageDetails.coverage.test}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Line Coverage</span>
                  <span className="font-semibold">{packageDetails.coverage.line}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Branch Coverage</span>
                  <span className="font-semibold">{packageDetails.coverage.branch}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Function Coverage</span>
                  <span className="font-semibold">{packageDetails.coverage.function}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Statement Coverage</span>
                  <span className="font-semibold">{packageDetails.coverage.statement}%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Publisher</h3>
              <a href={`https://suiscan.xyz/testnet/account/${packageDetails.publisher}`}
                 className="text-blue-600 hover:underline flex items-center gap-1">
                {packageDetails.publisher}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Repository</h3>
              <a href={packageDetails.repository}
                 className="text-blue-600 hover:underline flex items-center gap-1">
                GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Security Audit</h3>
              <a href="https://osec.io"
                 className="text-blue-600 hover:underline flex items-center gap-1">
                OtterSec
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Verifier</h3>
              <a href={`https://suiscan.xyz/testnet/account/${packageDetails.verifier}`}
                 className="text-blue-600 hover:underline flex items-center gap-1">
                {packageDetails.verifier}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Metadata</h3>
              <p className="text-gray-600">{packageDetails.metadata}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Dependencies</h3>
              {Object.entries(packageDetails.dependencies).map(([key, value]) => (
                <a key={key}
                   href={`https://suiscan.xyz/testnet/object/${value}`}
                   className="text-blue-600 hover:underline flex items-center gap-1 mb-2">
                  {key}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}