import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { NavBar } from "@/components/NavBar";
import herosection from '../assets/herosection.jpg'
import { toast } from "sonner";
import { Copy, Facebook, Linkedin, ThumbsUp, Twitter } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import { comments } from "../data/comments";
import Footer from "@/components/Footer";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";
import type { Post } from "@/types/blog";



const BASE_URL = "https://blog-post-project-api.vercel.app/posts";

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function AuthorBio() {
  return (
    <div className="flex flex-col gap-5 bg-[#EFEEEB] rounded-3xl p-6">
      <div className="flex gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden">
          <img
            src={herosection}
            alt="Thompson P."
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-body-3 text-brown-400">Author</p>
          <h3 className="text-headline-4 text-brown-500">Thompson P.</h3>
        </div>
      </div>
      <hr className="border-gray-300" />

      <p className="text-brown-400 font-family-sans">
        I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
        <br />
        <br />
        When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.
      </p>
    </div>
  );
}

async function SonnerPosition() {
  await navigator.clipboard.writeText(window.location.href);
  toast.custom((t) => (
    <div className="flex w-fit items-start gap-[12px] rounded-[8px] bg-brand-green p-4 shadow-lg relative">

      <div className="flex flex-col gap-1">
        <p className="text-headline-4 text-white">
          Copied!
        </p>
        <p className="text-body-2 text-white">
          This article has been copied to your clipboard.
        </p>
      </div>
      <button
        onClick={() => toast.dismiss(t)}
        className="absolute top-4 right-6 text-white opacity-80 hover:opacity-100"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  ), {
    duration: 5000,
  });
}
function ViewPostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isLoggedIn = false;

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.error("Fetch post error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (isLoading || !post) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  const shareUrl = encodeURIComponent(window.location.href);

  const handleLike = () => {
    if (!isLoggedIn) {
      setIsDialogOpen(true);
      return;
    }
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/share.php?u=${shareUrl}`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      "_blank"
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://www.twitter.com/share?&url=${shareUrl}`,
      "_blank"
    );
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-[1440px] md:px-[120px] md:pt-[60px] md:pb-[120px] mx-auto ">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[200px] sm:h-[340px] md:h-[587px] md:max-w-[1200px] object-cover md:rounded-2xl"
        />
        <div className="flex md:mt-[48px] gap-20">
          <div>
            <article className="mx-auto pt-6 px-4 md:p-0">
              <div className="flex gap-4">
                <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">{post.category}</span>
                <span className="text-body-1 text-brown-400">{formatDate(post.date)}</span>
              </div>
              <h1 className="text-headline-3 mt-4 leading-8">{post.title}</h1>
              <p className="text-body-1 mt-6 mp-10 text-brown-500">{post.description}</p>
              <div className="markdown">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </article>

            <div className="xl:hidden px-4 mt-5 mb-8">
              <AuthorBio />
            </div>

            <div className="w-full rounded-2xl bg-[#EFEEEB] flex flex-col gap-1.5 p-4 mt-8 justify-center md:justify-between md:flex-row">
              <div>
                <button onClick={handleLike} className="w-full flex justify-center items-center px-10 py-3 gap-1.5 border rounded-lg bg-white">
                  <ThumbsUp size={20} color="#26231E" strokeWidth={1} /><span>{post.likes}</span>
                </button>
              </div>

              <div className="flex flex-row gap-2 mt-4 md:mt-0">
                <button className="flex justify-center items-center px-7 py-3 gap-1.5 border rounded-lg bg-white grow" onClick={SonnerPosition}>
                  <Copy size={18} color="#26231E" strokeWidth={1} /> <span>Copy link</span>
                </button>

                <button
                  onClick={shareFacebook}
                  className="p-2 border rounded-lg bg-white"
                >
                  <Facebook size={30} color="#26231E" strokeWidth={1} />
                </button>

                <button
                  onClick={shareLinkedIn}
                  className="p-2 border rounded-lg bg-white"
                >
                  <Linkedin size={30} color="#26231E" strokeWidth={1} />
                </button>

                <button
                  onClick={shareTwitter}
                  className="p-2 border rounded-lg bg-white"
                >
                  <Twitter size={30} color="#26231E" strokeWidth={1} />
                </button>
              </div>
            </div>

            <Comment setDialogState={setIsDialogOpen} />

          </div>

          <div className="max-w-[305px] hidden xl:block self-start sticky top-20">
            <AuthorBio />
          </div>
        </div>

        <CreateAccountModal
          dialogState={isDialogOpen}
          setDialogState={setIsDialogOpen}
        />
      </div>

      <Footer />

    </div >
  );
}

type CommentProps = {
  setDialogState: React.Dispatch<React.SetStateAction<boolean>>;
};

function Comment({ setDialogState }: CommentProps) {
  return (
    <div>
      <div className="space-y-4 px-4 mb-16">
        <h3 className="text-lg font-semibold">Comment</h3>
        <div className="space-y-2">
          <Textarea
            onFocus={() => setDialogState(true)}
            placeholder="What are your thoughts?"
            className="w-full p-4 h-24 resize-none py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground"
          />
          <div className="flex justify-end">
            <button className="px-8 py-2 bg-foreground text-white rounded-full hover:bg-muted-foreground transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-6 px-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex flex-col gap-2 mb-4">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col items-start justify-between">
                  <h4 className="font-semibold">{comment.name}</h4>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
              </div>
            </div>
            <p className=" text-gray-600">{comment.comment}</p>
            {index < comments.length - 1 && (
              <hr className="border-gray-300 my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
type CreateAccountModalProps = {
  dialogState: boolean;
  setDialogState: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreateAccountModal({ dialogState, setDialogState }: CreateAccountModalProps) {
  return (
    <AlertDialog open={dialogState} onOpenChange={setDialogState}>
      <AlertDialogContent className="bg-white rounded-md pt-10 pb-10 max-w-[26rem] sm:max-w-lg flex flex-col items-center">
        <AlertDialogTitle className="text-3xl font-semibold pb-2 text-center">
          Create an account to continue
        </AlertDialogTitle>
        <Link
          to="/signup"
          className="rounded-full text-white bg-black hover:bg-muted-foreground transition-colors py-2 text-lg w-52 text-center"
        >
          Create account
        </Link>

        <AlertDialogDescription className="flex flex-row gap-1 justify-center font-medium text-center pt-2 text-muted-foreground">
          Already have an account?
          <Link
            to="/login"
            className="text-foreground hover:text-muted-foreground transition-colors underline font-semibold"
          >
            Log in
          </Link>
        </AlertDialogDescription>
        <AlertDialogCancel className="absolute right-4 top-2 sm:top-4 p-1 border-none">
          ✕
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ViewPostPage;
