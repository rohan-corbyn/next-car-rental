import postgres from "postgres";
import {
  CustomerField,
  CustomersTableType,
  BookingForm,
  BookingsTable,
  LatestBookingRaw,
  Revenue,
  Blog,
  Car,
} from "./definitions";

import { formatCurrency } from "./utils";

import { cache } from "react"; // 👈 this enables ISR with App Router

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue[]>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

// fetchFleet
export async function fetchFleet() {
  try {
    const data = await sql<Car[]>`
      SELECT * FROM cars`;

    const cars = data.map((car) => ({
      ...car,
    }));
    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest bookings.");
  }
}

// BLOGS

export async function fetchLatestBlogs() {
  try {
    const data = await sql<Blog[]>`
SELECT DISTINCT id, title, text, tags, image_url, created_at FROM posts where published_at IS NOT NULL
      ORDER BY created_at DESC
      LIMIT 5`;

    const latestBlogs = data.map((blog) => ({
      ...blog,
    }));
    return latestBlogs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest blogs.");
  }
}

export async function fetchAccountCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const bookingCountPromise = sql`SELECT COUNT(*) FROM bookings`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const bookingStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM bookings`;

    const data = await Promise.all([
      bookingCountPromise,
      customerCountPromise,
      bookingStatusPromise,
    ]);

    const numberOfBookings = Number(data[0][0].count ?? "0");
    const numberOfCustomers = Number(data[1][0].count ?? "0");
    const totalPaidBookings = formatCurrency(data[2][0].paid ?? "0");
    const totalPendingBookings = formatCurrency(data[2][0].pending ?? "0");

    return {
      numberOfCustomers,
      numberOfBookings,
      totalPaidBookings,
      totalPendingBookings,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

const ITEMS_PER_PAGE = 6;

// BOOKINGS

export async function fetchLatestBookings() {
  try {
    const data = await sql<LatestBookingRaw[]>`
      SELECT bookings.amount, customers.name, cars.name as car_name, customers.image_url, customers.email, bookings.id 
      FROM bookings
      JOIN customers ON bookings.customer_id = customers.id
      JOIN cars ON bookings.car_id = cars.id

      ORDER BY bookings.date DESC
      LIMIT 5`;

    const latestBookings = data.map((booking) => ({
      ...booking,
      amount: formatCurrency(booking.amount),
    }));
    return latestBookings;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest bookings.");
  }
}

export async function fetchFilteredBookings(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const bookings = await sql<BookingsTable[]>`
      SELECT
        bookings.id,
        bookings.amount,
        bookings.date,
        bookings.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM bookings
      JOIN customers ON bookings.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        bookings.amount::text ILIKE ${`%${query}%`} OR
        bookings.date::text ILIKE ${`%${query}%`} OR
        bookings.status ILIKE ${`%${query}%`}
      ORDER BY bookings.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return bookings;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch bookings.");
  }
}

export async function fetchBookingsPages(query: string) {
  try {
    const data = await sql`SELECT COUNT(*)
    FROM bookings
    JOIN customers ON bookings.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      bookings.amount::text ILIKE ${`%${query}%`} OR
      bookings.date::text ILIKE ${`%${query}%`} OR
      bookings.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of bookings.");
  }
}

export async function fetchBookingById(id: string) {
  try {
    const data = await sql<BookingForm[]>`
      SELECT
        bookings.id,
        bookings.customer_id,
        bookings.amount,
        bookings.status
      FROM bookings
      WHERE bookings.id = ${id};
    `;

    const booking = data.map((booking) => ({
      ...booking,
      // Convert amount from cents to dollars
      amount: booking.amount / 100,
    }));

    return booking[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}

// CUSTOMERS

// export async function fetchCustomers() {
//   try {
//     const customers = await sql<CustomerField[]>`
//       SELECT
//         id,
//         name
//       FROM customers
//       ORDER BY name ASC
//     `;

//     return customers;
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch all customers.");
//   }
// }

// export async function fetchFilteredCustomers(query: string) {
//   try {
//     const data = await sql<CustomersTableType[]>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(bookings.id) AS total_bookings,
// 		  SUM(CASE WHEN bookings.status = 'pending' THEN bookings.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN bookings.status = 'paid' THEN bookings.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN bookings ON customers.id = bookings.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//     const customers = data.map((customer) => ({
//       ...customer,
//       total_pending: formatCurrency(customer.total_pending),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return customers;
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch customer table.");
//   }
// }
