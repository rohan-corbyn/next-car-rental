import { formatCurrency } from "@/app/lib/utils";
import { lusitana, merinda } from "../fonts";
import Image from "next/image";

export function FleetCard({
  id,
  name,
  current_rate,
  image_url,
}: {
  id: string;
  name: string;
  current_rate: number;
  image_url: string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-md">
      <div className="flex flex-col p-4">
        <h3 className={`${merinda.className} text-2xl font-medium p-3`}>
          {name}
        </h3>
        <Image
          src={image_url}
          width={512}
          height={512}
          alt="Needs to be stored and added"
        />

        <h3
          className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {formatCurrency(current_rate)}
        </h3>
      </div>
    </div>
  );
}
