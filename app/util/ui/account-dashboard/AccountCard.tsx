import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/util/ui/fonts";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  bookings: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      {/* <Card title="Collected" value={totalPaidBookings} type="collected" />
      <Card title="Pending" value={totalPendingBookings} type="pending" />
      <Card title="Total Bookings" value={numberOfBookings} type="bookings" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export function AccountCard({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "bookings" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
