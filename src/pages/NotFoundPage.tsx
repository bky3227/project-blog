import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SearchAlert } from "lucide-react";

function NotFoundPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <SearchAlert size={100} strokeWidth={1.5} /><h1 className="text-headline-3">404 - Page Not Found</h1>
        <button className="rounded-full text-white bg-black hover:bg-muted-foreground transition-colors py-2 text-lg w-52">Go To Homepage</button>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
