import { useBlogPosts } from "@/hook/useBlogPosts";
import { type BlogPost } from "@/types/blog";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/Search_light.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [selectedCategory, setSelectedCategory] = useState("Highlight");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  const [suggestions, setSuggestions] = useState<BlogPost[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!debouncedSearch) {
      setSuggestions([]);
      setShowSuggestion(false);
      return;
    }

    const fetchSuggestions = async () => {
      const res = await fetch(
        `https://blog-post-project-api.vercel.app/posts?keyword=${debouncedSearch}&limit=5`
      );
      const data: BlogPost[] = await res.json();
      setSuggestions(data);
      setShowSuggestion(true);
    };

    fetchSuggestions();
  }, [debouncedSearch]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { posts, isLoading, hasMore, loadMore } =
    useBlogPosts(selectedCategory, debouncedSearch);




  return (
    <div className="w-full flex flex-col mx-auto xl:max-w-[1200px] py-[120px]">
      <div className="w-full flex flex-col gap-8">
        <h3 className="text-headline-3 leading-8 text-brown-600 p-4 xl:p-0">
          Latest articles
        </h3>
        <div className="w-full p-4 flex flex-col items-center gap-4 bg-brown-200 xl:px-6 xl:py-4 xl:flex-row xl:justify-between xl:rounded-2xl">
          <nav aria-label="Category tabs" className="hidden xl:block">
            <ul className="flex gap-2">
              {categories.map((category) => {
                const isActive = category === selectedCategory;

                return (
                  <li key={category}>
                    <button
                      disabled={isActive}
                      onClick={() => setSelectedCategory(category)}
                      className={`
                          text-body-1 px-5 py-3 rounded-lg
                          transition-colors
                          ${isActive
                          ? "bg-brown-300 text-brown-600 cursor-default"
                          : "text-brown-400 hover:bg-brown-100 hover:text-brown-600"
                        }`}>
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative w-full pl-4 pr-3 py-3 bg-white border border-brown-300 rounded-lg flex flex-row gap-1 xl:max-w-[360px]">
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                placeholder:text-body-1
                placeholder:text-brown-400
                w-full max-h-6
                px-0 py-0
                border-0 shadow-none
                focus:outline-none
                focus:ring-0
                focus-visible:ring-0
                focus-visible:outline-none
                xl:max-w-[304px]"
              onFocus={() => {
                if (suggestions.length > 0) {
                  setShowSuggestion(true);
                }
              }}

              onBlur={() => {
                setTimeout(() => {
                  setShowSuggestion(false);
                }, 150);
              }}
            />
            {showSuggestion && suggestions.length > 0 && (
              <ul className="absolute top-full mt-2 right-0 w-full bg-white rounded-lg shadow-lg z-50">
                {suggestions.map((post) => (
                  <li
                    key={post.id}
                    onClick={() => navigate(`/post/${post.id}`)}
                    className="px-4 py-2 cursor-pointer hover:bg-brown-100"
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            )}

            <img src={SearchIcon} alt="search-icon" />
          </div>
          <div className="w-full flex flex-col gap-1 xl:hidden">
            <div className="text-body-1 text-brown-400">
              Category
            </div>
            <Select
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value)}
            >
              <SelectTrigger
                className="
                w-full !h-auto pl-4 pr-3 py-3
                border border-brown-300
                bg-white
                data-[state=open]:bg-brown-50
                data-[state=open]:border-brown-400
                rounded-lg
                text-body-1 text-brown-400
                focus:outline-none
                transition-all
              "
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent
                position="popper"
                className="
              bg-brown-200
                rounded-lg
              text-brown-400
              "
              >
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="focus:bg-brown-300 data-[state=checked]:text-brown-600"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>

            </Select>
          </div>
        </div>
        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          max-w-5xl
          mx-auto
          py-4
          px-4
          ">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
            />
          ))}
        </section>
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="text-body-1 text-brown-600 underline"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "View more"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default ArticleSection;