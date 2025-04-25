// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Ka",
    email: "k@nextmail.com",
    password: "123456",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Ro",
    email: "Ro@nextmail.com",
    password: "123456",
  },
];

const customers = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Fiona Rabbit",
    email: "fional@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const cars = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Rolls-royce Phantom",
    current_rate: 20348,
    image_url: "public/cars/Toy Rolls-Royce-phantom.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Rolls-royce Spectre",
    current_rate: 15795,
    image_url: "public/cars/Toy Rolls-Royce-spectre.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Rolls-royce Cullinan",
    current_rate: 23715,
    image_url: "public/cars/Toy Rolls-Royce-cullinan.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Rolls-royce Ghost",
    current_rate: 23241,
    image_url: "public/cars/Toy Rolls-Royce-ghost.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Rolls-royce Wraith",
    current_rate: 18546,
    image_url: "public/cars/Toy Rolls-Royce-wraith.png",
  },
];

const bookings = [
  {
    customer_id: customers[0].id,
    car_id: cars[4].id,
    amount: cars[4].current_rate * 2,
    hours: 2,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    car_id: cars[4].id,
    amount: cars[4].current_rate * 3,
    hours: 3,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[4].id,
    car_id: cars[4].id,
    amount: cars[4].current_rate * 3,
    hours: 3,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customers[3].id,
    car_id: cars[4].id,
    amount: cars[4].current_rate * 3,
    hours: 3,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customers[5].id,
    car_id: cars[4].id,
    amount: cars[4].current_rate * 3,
    hours: 3,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customers[2].id,
    car_id: cars[4].id,
    amount: cars[4].current_rate * 3,
    hours: 3,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customers[0].id,
    car_id: cars[4].id,
    amount: cars[4].current_rate * 3,
    hours: 3,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customers[3].id,
    car_id: cars[3].id,
    amount: cars[3].current_rate * 3,
    hours: 3,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customers[4].id,
    car_id: cars[0].id,
    amount: cars[0].current_rate * 3,
    hours: 3,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customers[5].id,
    car_id: cars[4].id,
    amount: cars[4].current_rate * 3,
    hours: 3,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer_id: customers[1].id,
    car_id: cars[3].id,
    amount: cars[3].current_rate * 3,
    hours: 3,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer_id: customers[5].id,
    car_id: cars[2].id,
    amount: cars[2].current_rate * 3,
    hours: 3,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer_id: customers[2].id,
    car_id: cars[1].id,
    amount: cars[1].current_rate * 3,
    hours: 3,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

const blogs = [
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    title: "New website! First Blog!",
    tags: '"Fresh start", "New Features"',
    car_id: null,
    date: "2023-06-03",
    text: "Sorry it's been a while, we've been super busy! Please explore our new website, try out our new features and see what we've been up to.",
    image_url: "https://picsum.photos/300",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    title: "Summer Early Bookings offer!",
    tags: '"Summer-Savings", "Discounts", "Welcome Package"',
    car_id: null,
    date: "2023-06-03",
    text: "Summer is approaching and we love summer so if you book before the end of April for June, July, or August you will recieve a 50% discount on your vehicle and a suprise gift during your booking.",
    image_url: "https://picsum.photos/300",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    title: "New Phantoms in",
    tags: '"new vehicles", "Phantom"',
    car_id: null,
    date: "2023-06-03",
    text: "We've just recieved our new range of Rolls Royce Phantoms! We look forward to your reactions, we think they're fantastic!",
    image_url: "/cars/phantom.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    title: "New Wraiths in",
    tags: '"new vehicles", "Ghost"',
    car_id: null,
    date: "2023-06-03",
    text: "We've just recieved our new range of Rolls Royce Ghosts! We look forward to your reactions, we think they're fantastic!",
    image_url: "/cars/wraith.png",
  },
];

export { users, customers, bookings, revenue, blogs, cars };
