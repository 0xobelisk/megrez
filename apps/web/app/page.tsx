'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@repo/ui/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/ui/card"
import { Search, ExternalLink } from "lucide-react"


export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video playback
    }
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/package/${encodeURIComponent(searchQuery.trim())}/installing`);
    }
  };

  return <main>
     <div className="min-h-screen bg-white">
      {/* Top section */}
      <div className="bg-[#0078D4] text-white relative overflow-hidden">

        {/* Main content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[500px] px-4">
          <div className="mb-8 flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#0175C2"/>
              <path d="M20 24.0002C22.2091 24.0002 24 22.2093 24 20.0002C24 17.791 22.2091 16.0002 20 16.0002C17.7909 16.0002 16 17.791 16 20.0002C16 22.2093 17.7909 24.0002 20 24.0002Z" fill="white"/>
            </svg>
            <span className="text-4xl font-bold ml-4">Package.dev</span>
          </div>

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

          <p className="text-lg mb-4 text-center">
            The official package repository for <span className="text-[#13B9FD]">Sui</span> and{" "}
            <span className="text-[#13B9FD]">Sui</span> dapps.
          </p>

          <div className="flex items-center space-x-2">
            <span className="text-sm opacity-70">Supported by</span>
            <svg width="68" height="23" viewBox="0 0 1544 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1014.53 315.964C1011.7 292.098 1000.24 273.571 980.145 260.382C960.048 247.193 935.397 240.599 906.193 240.599C884.84 240.599 866.155 244.053 850.14 250.961C834.282 257.87 821.878 267.369 812.929 279.459C804.136 291.549 799.74 305.287 799.74 320.674C799.74 333.549 802.802 344.618 808.925 353.882C815.206 362.988 823.213 370.603 832.948 376.727C842.682 382.693 852.888 387.639 863.565 391.564C874.242 395.333 884.055 398.394 893.004 400.749L941.992 413.938C954.552 417.235 968.526 421.789 983.913 427.598C999.457 433.408 1014.29 441.337 1028.43 451.385C1042.71 461.277 1054.49 473.995 1063.75 489.539C1073.02 505.083 1077.65 524.16 1077.65 546.769C1077.65 572.833 1070.82 596.385 1057.16 617.424C1043.66 638.463 1023.87 655.185 997.809 667.589C971.902 679.993 940.421 686.195 903.367 686.195C868.825 686.195 838.914 680.621 813.635 669.473C788.514 658.325 768.73 642.781 754.285 622.841C739.998 602.9 731.911 579.741 730.027 553.364H790.319C791.889 571.577 798.013 586.65 808.69 598.583C819.523 610.358 833.183 619.151 849.669 624.96C866.312 630.613 884.212 633.439 903.367 633.439C925.662 633.439 945.681 629.828 963.423 622.605C981.166 615.226 995.218 605.02 1005.58 591.988C1015.94 578.799 1021.12 563.412 1021.12 545.827C1021.12 529.812 1016.65 516.78 1007.7 506.732C998.751 496.683 986.975 488.518 972.373 482.238C957.771 475.957 941.992 470.462 925.034 465.752L865.684 448.795C828.002 437.961 798.17 422.495 776.188 402.398C754.207 382.301 743.216 356.001 743.216 323.5C743.216 296.494 750.517 272.943 765.119 252.845C779.878 232.591 799.662 216.89 824.469 205.742C849.434 194.438 877.303 188.785 908.077 188.785C939.165 188.785 966.799 194.359 990.979 205.507C1015.16 216.498 1034.31 231.571 1048.44 250.726C1062.73 269.881 1070.27 291.627 1071.05 315.964H1014.53Z" fill="white"/>
              <path d="M1354.33 529.812V315.964H1409.91V677.716H1354.33V616.482H1350.56C1342.08 634.852 1328.89 650.475 1311 663.349C1293.1 676.067 1270.49 682.426 1243.17 682.426C1220.56 682.426 1200.46 677.48 1182.87 667.589C1165.29 657.54 1151.47 642.467 1141.42 622.37C1131.38 602.115 1126.35 576.601 1126.35 545.827V315.964H1181.93V542.059C1181.93 568.437 1189.31 589.476 1204.07 605.177C1218.99 620.878 1237.99 628.729 1261.07 628.729C1274.88 628.729 1288.94 625.196 1303.22 618.13C1317.67 611.065 1329.76 600.231 1339.49 585.629C1349.38 571.027 1354.33 552.422 1354.33 529.812Z" fill="white"/>
              <path d="M1471.92 677.716V315.964H1527.5V677.716H1471.92ZM1500.18 255.672C1489.35 255.672 1480.01 251.982 1472.16 244.602C1464.46 237.223 1460.62 228.352 1460.62 217.989C1460.62 207.626 1464.46 198.755 1472.16 191.376C1480.01 183.996 1489.35 180.307 1500.18 180.307C1511.02 180.307 1520.28 183.996 1527.97 191.376C1535.82 198.755 1539.75 207.626 1539.75 217.989C1539.75 228.352 1535.82 237.223 1527.97 244.602C1520.28 251.982 1511.02 255.672 1500.18 255.672Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M500.808 333.65L500.794 333.685C533.431 374.608 552.935 426.441 552.935 482.817C552.935 540.031 532.846 592.567 499.329 633.768L496.443 637.316L495.678 632.807C495.027 628.973 494.262 625.102 493.374 621.2C476.599 547.498 421.946 484.298 331.994 433.126C271.251 398.665 236.482 357.17 227.353 310.024C221.457 279.538 225.841 248.916 234.311 222.687C242.779 196.467 255.376 174.499 266.078 161.273L266.085 161.265L301.076 118.478C307.213 110.974 318.697 110.974 324.833 118.478L500.808 333.65ZM556.154 290.902L556.16 290.886L321.623 4.10672C317.145 -1.36891 308.762 -1.36891 304.284 4.10672L69.7444 290.888L69.7508 290.904L68.9877 291.851C25.828 345.408 0 413.47 0 487.559C0 660.112 140.111 800 312.953 800C485.796 800 625.907 660.112 625.907 487.559C625.907 413.47 600.079 345.408 556.919 291.852L556.154 290.902ZM125.863 332.726L125.872 332.714L146.85 307.063L147.484 311.798C147.986 315.55 148.595 319.32 149.317 323.107C162.891 394.325 211.38 453.708 292.448 499.699C362.916 539.805 403.944 585.924 415.766 636.504C420.698 657.613 421.577 678.381 419.441 696.54L419.309 697.663L418.293 698.16C386.488 713.698 350.734 722.419 312.946 722.419C180.407 722.419 72.9573 615.148 72.9573 482.817C72.9573 426.002 92.7652 373.796 125.863 332.726Z" fill="white"/>
            </svg>
          </div>
        </main>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Move Package Favorites</h2>
        <p className="text-gray-600 mb-8">
          Some of the packages that demonstrate the highest levels of quality, selected by the Sui Ecosystem Committee
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "sign_in_with_apple",
              description: "Flutter bridge to initiate Sign in with Apple (on iOS, macOS, and Android). Includes support for keychain entries.",
              publisher: "aboutyou.com"
            },
            {
              name: "built_value_generator",
              description: "Value types with builders, Dart classes as enums, and serialization. This library is the dev dependency.",
              publisher: "google.dev"
            },
            {
              name: "bloc",
              description: "A predictable state management library that helps implement the BLoC (Business Logic Component) design pattern.",
              publisher: "bloclibrary.dev"
            },
            {
              name: "characters",
              description: "String replacement with operations that are Unicode/grapheme cluster aware.",
              publisher: "dart.dev"
            }
          ].map((pkg, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-600 hover:underline">
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    router.push(`/package/${pkg.name}/installing`);
                  }}>
                    {pkg.name}
                  </a>
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
  </main>;
}
