import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-bold text-blue-800 mb-4">
              Welcome to <br />
              Essentia!
            </h2>
            <p className="text-2xl text-blue-800 mb-6">
              Your Inventory, Perfectly in Control
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md text-xl"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end ml-14">
            <Image
              src="/essentia_landingpage_logo.png"
              alt="Essentia Logo"
              width={350}
              height={350}
              className="w-[350px] md:w-[400px] lg:w-[350px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
