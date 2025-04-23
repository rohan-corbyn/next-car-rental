import { lusitana } from "@/app/ui/fonts";
import { fetchLatestBlogs } from "@/app/lib/data";
import { BlogCard } from "@/app/ui/blogs/BlogCard";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function Blogs() {
  const latestBlogs = await fetchLatestBlogs();

  return (
    <main>
      <div className="flex flex-col gap-5 pl-10 pr-10 overflow-hidden">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Blogs
        </h1>
        {latestBlogs.map((blog) => {
          return <BlogCard key={blog.id} {...blog} />;
        })}
      </div>
    </main>
  );
}
