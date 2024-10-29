'use client';

export default function Page() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        <source src="/path/to/your/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white">Build Beyond</h1>
        <p className="text-white">Sui delivers the benefits of Web3 with the ease of Web2</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Start building</button>
        <button className="bg-transparent border border-white text-white px-4 py-2 rounded ml-4">Learn about Sui →</button>
      </div>
    </main>
  );
}
