import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listBookings() {
	const data = await sql`
    SELECT bookings.amount, customers.name
    FROM bookings
    JOIN customers ON bookings.customer_id = customers.id
    WHERE bookings.amount = 666;
  `;

	return data;
}

export async function GET() {
  try {
  	return Response.json(await listBookings());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
