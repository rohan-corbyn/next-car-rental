import { fetchFleet } from "../../util/lib/data";
import { FleetCard } from "../../util/ui/fleet/FleetCard";
import { lusitana } from "../../util/ui/fonts";

export default async function Fleet() {
  const cars = await fetchFleet();
  console.log(cars);
  return (
    <main>
      <div className="flex flex-col gap-5">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Fleet
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => {
            return <FleetCard key={car.id} {...car} />;
          })}
        </div>
      </div>
    </main>
  );
}
