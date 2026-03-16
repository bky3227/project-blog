import { useNavigate } from "react-router-dom";
import type { BlogPost } from "@/types/blog";

type BlogCardProps = Pick<
  BlogPost,
  "id" | "image" | "category" | "title" | "description" | "author" | "date"
>;


function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogCard(props: BlogCardProps) {
  const { id, image, category, title, description, author, date } = props;
  const navigate = useNavigate();

  const goToPost = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={goToPost}
        className="relative h-[212px] sm:h-[360px] cursor-pointer"
      >
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">{category}</span>
        </div>
        <h2
          onClick={goToPost}
          className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline cursor-pointer"
        >
          {title}
        </h2>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img className="w-8 h-8 rounded-full mr-2" src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt="Tomson P." />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{formatDate(date)}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;