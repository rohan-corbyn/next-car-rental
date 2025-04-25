import { Card } from "@/app/util/ui/account-dashboard/AccountCards";
import RevenueChart from "@/app/util/ui/account-dashboard/RecentRevenue";
import LatestBookings from "@/app/util/ui/account-dashboard/LatestBookings";
import {
  fetchRevenue,
  fetchLatestBookings,
  fetchCardData,
} from "@/app/util/lib/data";
import PageLayout from "../util/ui/PageLayout";

export default async function Dashboard() {
  const revenue = await fetchRevenue();
  const latestBookings = await fetchLatestBookings();
  const {
    numberOfBookings,
    numberOfCustomers,
    totalPaidBookings,
    totalPendingBookings,
  } = await fetchCardData();

  const content = (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
      <div className="py-10 grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestBookings latestBookings={latestBookings} />
      </div>
    </>
  );

  return (
    <main>
      <PageLayout heading={""} content={content}></PageLayout>
    </main>
  );
}
