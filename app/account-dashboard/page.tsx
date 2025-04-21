import { Card } from "@/app/ui/account-dashboard/AccountCards";
import RevenueChart from "@/app/ui/account-dashboard/revenue-chart";
import LatestBookings from "@/app/ui/account-dashboard/LatestBookings";
import { lusitana } from "@/app/ui/fonts";
import {
  fetchRevenue,
  fetchLatestBookings,
  fetchCardData,
} from "@/app/lib/data";

export default async function Dashboard() {
  const revenue = await fetchRevenue();
  const latestBookings = await fetchLatestBookings();
  const {
    numberOfBookings,
    numberOfCustomers,
    totalPaidBookings,
    totalPendingBookings,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {<Card title="Collected" value={totalPaidBookings} type="collected" />}
        {<Card title="Pending" value={totalPendingBookings} type="pending" />}
        {
          <Card
            title="Total Bookings"
            value={numberOfBookings}
            type="bookings"
          />
        }
        {
          <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
          />
        }
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* {<RevenueChart revenue={revenue} />} */}
        {<LatestBookings latestBookings={latestBookings} />}
      </div>
    </main>
  );
}
