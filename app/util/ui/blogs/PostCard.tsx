import Image from "next/image";
import { merinda } from "@/app/util/ui/fonts";

export function PostCard({
  title,
  tags,
  created_at,
  text,
  image_url,
}: {
  title: string;
  text: string;
  tags: string;
  created_at: string;
  image_url: string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-5 shadow-sm">
      <div className="flex flex-col p-4 bg-white">
        <h2 className={`${merinda.className} ml-2 text-2xl font-medium`}>
          {title}
        </h2>

        <div className="flex flex-row flex-wrap gap-4 justify-between">
          <span className="ml-2 text-md">
            {tags && tags.replaceAll('"', "")}
          </span>
          <span className="ml-2 text-md font-medium">
            {created_at.toLocaleString()}
          </span>
        </div>

        <div className="flex flex-row flex-wrap gap-6 rounded-xl bg-white px-4 py-8 ">
          {image_url && (
            <Image
              src={image_url}
              width={1536 / 4}
              height={1024 / 4}
              alt="Needs to be stored and added"
            />
          )}
          <div className="blog-card-text lg:w-1/2">
            <p className="ml-2 wrap-normal text-lg">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
