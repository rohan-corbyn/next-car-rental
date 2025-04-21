import React from "react";

import Image from "next/image";
import IntroCard from "./ui/intro-card";

export default function Page() {
  return (
    <main className="">
      <div className="p-10 flex flex-wrap flex-col justify-center gap-9 md:flex-row">
        <IntroCard />
        <div className="items-center justify-center lg:w-1/2 md:px-15 lg:px-30 md:py-12">
          <Image
            className="rounded-2xl"
            src="/cars/Toy Rolls-Royce-collection-on-wood.png"
            width={1536}
            height={1024}
            alt="An image of a Bugatti Veyron"
          />
        </div>
      </div>
    </main>
  );
}
