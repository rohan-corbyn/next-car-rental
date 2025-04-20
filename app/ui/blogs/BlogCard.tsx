import Image from 'next/image';
import Link from 'next/link';

type Blog = {
  id: string;
  title: string;
  imageUrl?: string;
  text: string;
  tags: string[];
  slug: string; // Assuming the slug is used for routing
};

type BlogCardProps = {
  blog: Blog;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white p-4 shadow-lg">
      {/* Blog Image */}
      {blog.imageUrl && (
        <div className="mb-4">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={500}
            height={300}
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Blog Title */}
      <h2 className="mb-2 text-2xl font-bold">
        <Link href={`/blog/${blog.slug}`}>
          <a className="text-gray-800 hover:text-blue-600">{blog.title}</a>
        </Link>
      </h2>

      {/* Blog Text Preview */}
      <p className="mb-4 text-sm text-gray-700">
        {blog.text.length > 150 ? `${blog.text.substring(0, 150)}...` : blog.text}
      </p>

      {/* Blog Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View More Button */}
      <Link href={`/blog/${blog.slug}`}>
        <a className="font-semibold text-blue-600 hover:underline">Read More</a>
      </Link>
    </div>
  );
};

export default BlogCard;
