import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@repo/ui/components/ui/card";

interface Package {
  name: string;
  description: string;
  publisher: string;
}

interface PackageListProps {
  packages: {
    popular: Package[];
    favorites: Package[];
  };
}

export default function PackageList({ packages }: PackageListProps) {
  return (
    <div className="space-y-16">
      {/* Favorites Section */}
      <div>
        <p className="text-gray-600 mb-8">
          Some of the packages that demonstrate the highest levels of quality, selected by the Sui Ecosystem Committee
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.favorites.map((pkg) => (
            <Card key={pkg.name} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-600 hover:underline">
                  <Link href={`/package/${encodeURIComponent(pkg.name)}/installing`}>
                    {pkg.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center text-gray-500">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="text-xs">{pkg.publisher}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button className="text-blue-600 hover:underline">VIEW ALL</button>
        </div>
      </div>

      {/* Popular Packages Section */}
      <div>
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Most popular packages</h2>
        <p className="text-gray-600 mb-8">
          Some of the most downloaded packages over the past 60 days
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.popular.map((pkg) => (
            <Card key={pkg.name} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-600 hover:underline">
                  <Link href={`/package/${encodeURIComponent(pkg.name)}/installing`}>
                    {pkg.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center text-gray-500">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="text-xs">{pkg.publisher}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button className="text-blue-600 hover:underline">VIEW ALL</button>
        </div>
      </div>
    </div>
  );
}