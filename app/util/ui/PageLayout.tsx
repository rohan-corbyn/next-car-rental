import { lusitana } from "./fonts";

export default function PageLayout({
  heading,
  content,
}: {
  heading: string;
  content: React.ReactNode;
}) {
  return (
    <>
      {/* Add your scrollable content here */}
      <h1
        className={`sticky ${lusitana.className} mb-4 mt-20 text-xl md:text-2xl `}
      >
        {heading}
      </h1>
      <div className="overflow-y-auto h-full">{content}</div>
    </>
  );
}
