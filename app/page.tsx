import Image from 'next/image';
import IntroCard from './ui/intro-card';

export default function Page() {
  return (
    <main className="">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <IntroCard />
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/bugatti-landing.png"
            width={512}
            height={384}
            alt="An image of a Bugatti Veyron"
          />
        </div>
      </div>
    </main>
  );
}
