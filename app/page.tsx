import Image from 'next/image';
import { Metadata } from 'next';
import { AboutButton, LocationsButton } from './components/home/HomeButtons';

export const metadata: Metadata = {
  title: "Hire in Hawaii - Pacific ScoutLink",
  description: "Our philosophy is to find local talent to hire to keep our communities and strengthen the Hawaii economy.",
};

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden pt-14 w-screen h-screen">
        <Image
          alt=""
          src="/home.webp"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          layout="fill"
          objectFit='cover'
          quality={100}
          priority
        />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-42">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <LocationsButton/>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Identify Ideal Candidates with ScoutLink
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
              We specialize in finding great hires across many industries like tech, environmental, and engineering.
            </p>
            <AboutButton />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

