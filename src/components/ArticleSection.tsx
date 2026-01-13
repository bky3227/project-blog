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
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";

function ArticleSection() {

  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [selectedCategory, setSelectedCategory] = useState("Highlight");

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

          <div className="w-full pl-4 pr-3 py-3 bg-white border border-brown-300 rounded-lg flex flex-row gap-1 xl:max-w-[360px]">
            <Input
              type="search"
              placeholder="Search"
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
            />
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
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
            />
          ))}
        </section>
        <button className="text-body-1 text-brown-600 underline">View more</button>
      </div>
    </div>
  );
}

export default ArticleSection;