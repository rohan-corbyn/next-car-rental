import { merinda, inter } from "@/app/ui/fonts";
import CarsForHireLogo from "@/app/ui/cars-for-hire-logo";

export default function IntroCard() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-yellow-200 px-6 py-10 lg:w-2/5 md:px-20">
      <div className="flex flex-row flex-wrap gap-2">
        <p
          className={`${merinda.className} text-nowrap text-xl text-gray-800 md:text-3xl md:leading-normal`}
        >
          <strong>Welcome to</strong>{" "}
        </p>
        <CarsForHireLogo displayIcon={false}></CarsForHireLogo>
      </div>
      <p
        className={`${inter.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        This is an example of a{" "}
        <a href="https://nextjs.org/learn/" className="text-orange-500">
          Next.js
        </a>{" "}
        App using{" "}
        <a
          href="https://www.typescriptlang.org/docs/"
          className="text-orange-500"
        >
          TypeScript
        </a>
        ,{" "}
        <a href="https://tailwindcss.com/docs/" className="text-orange-500">
          Tailwind
        </a>
        ,{" "}
        <a href="https://www.postgresql.org/docs/" className="text-orange-500">
          PostgreSQL
        </a>
        , Hosted on{" "}
        <a
          href="https://vercel.com/docs"
          className="text-nowrap text-orange-500"
        >
          Vercel
        </a>
        .
      </p>
    </div>
  );
}
