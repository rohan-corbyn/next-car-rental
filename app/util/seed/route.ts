import bcrypt from "bcryptjs";
import postgres from "postgres";
import {
  bookings,
  customers,
  revenue,
  users,
  blogs,
  cars,
} from "../lib/placeholder-data";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedBookings() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedBookings = await Promise.all(
    bookings.map(
      (booking) => sql`
        INSERT INTO bookings (customer_id, car_id, amount, status, date)
        VALUES (${booking.customer_id}, ${booking.car_id}, ${booking.amount}, ${booking.status}, ${booking.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedBookings;
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `
    )
  );

  return insertedRevenue;
}

export type Car = {
  id: string;
  name: string;
  current_rate: number;
  image_url: string;
};

async function seedCars() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS cars (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255),
      current_rate INT NOT NULL,
      image_url VARCHAR(255)
    );
  `;

  const insertedCars = await Promise.all(
    cars.map(
      (car) => sql`
        INSERT INTO cars (id, name, current_rate, image_url)
        VALUES (${car.id}, ${car.name}, ${car.current_rate}, ${car.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedCars;
}

async function seedBlogs() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      tags VARCHAR(255),
      car_id UUID,
      date DATE NOT NULL,
      text VARCHAR(500) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedBlogs = await Promise.all(
    blogs.map(
      (blog) => sql`
        INSERT INTO blogs (id, title, tags, car_id, date, text, image_url)
        VALUES (${blog.id}, ${blog.title}, ${blog.tags}, ${blog.car_id}, ${blog.date}, ${blog.text}, ${blog.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedBlogs;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      // seedUsers(),
      // seedCustomers(),
      seedBookings(),
      // seedRevenue(),
      // seedCars(),
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
