import { fetchFleet } from "../util/lib/data";
import { FleetCard } from "../util/ui/fleet/FleetCard";
import PageLayout from "../util/ui/PageLayout";

export default async function Fleet() {
  const cars = await fetchFleet();

  const carComponents = cars.map((car) => {
    return <FleetCard key={car.id} {...car} />;
  });

  const content = (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {carComponents}
    </div>
  );

  return (
    <main>
      <PageLayout heading={"Fleet"} content={content}></PageLayout>
    </main>
  );
}
