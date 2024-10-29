import { getPackageDetails } from '@/app/services/packages';
import PackageDetails from './PackageDetails';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { package: string } }) {
  const packageDetails = await getPackageDetails(params.package);
  
  return (
    <Suspense fallback={<div>Loading package details...</div>}>
      <PackageDetails packageDetails={packageDetails} />
    </Suspense>
  );
}