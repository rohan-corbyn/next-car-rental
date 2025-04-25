export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Car = {
  id: string;
  name: string;
  current_rate: number;
  image_url: string;
};

export type Booking = {
  id: string;
  car_id: string;
  customer_id: string;
  event: string;
  amount: number;
  hours: number;
  date: string;
  status: "pending" | "paid";
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestBooking = {
  id: string;
  car_name: string;
  name: string;
  date: string;
  amount: string;
  event: string;
  image_url: string;
  email: string;
};

export type Blog = {
  id: string;
  title: string;
  tags: string;
  created_at: string;
  text: string;
  image_url: string;
};

// // The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestBookingRaw = Omit<LatestBooking, "amount"> & {
  amount: number;
};

export type BookingsTable = {
  id: string;
  car_id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  event: string;
  amount: number;
  status: "pending" | "paid";
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_bookings: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_bookings: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type BookingForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};

export type BlogTable = {
  id: string;
  title: string;
  tags: string;
  car_id: string;
  date: string;
  text: string;
  image_url: string;
};
