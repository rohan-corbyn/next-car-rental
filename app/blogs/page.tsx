import { lusitana } from "@/app/util/ui/fonts";
import { fetchLatestBlogs } from "@/app/util/lib/data";
import { PostCard } from "@/app/util/ui/blogs/PostCard";
import PageLayout from "../util/ui/PageLayout";

export const dynamic = "force-dynamic";

export default async function Blogs() {
  const latestBlogs = await fetchLatestBlogs();
  const blogComponents = latestBlogs.map((blog) => {
    return <PostCard key={blog.id} {...blog} />;
  });
  const content = <div className="flex flex-col gap-5">{blogComponents}</div>;

  return (
    <main>
      <PageLayout heading={"Blogs"} content={content}></PageLayout>
    </main>
  );
}
