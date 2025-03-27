import { useParams } from "react-router-dom";

// Define TypeScript types
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

// Sample blog data
const posts: BlogPost[] = [
  {
    id: 1,
    title: "10 Must-Visit Destinations in 2025",
    content: "Here is the full content of the blog post...",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    category: "Travel Tips",
  },
  {
    id: 2,
    title: "Complete Guide to Schengen Visa Application",
    content: "Everything you need to know about applying for a Schengen visa...",
    author: "Michael Chen",
    date: "March 12, 2025",
    category: "Visa Guide",
  },
  {
    id: 3,
    title: "Budget Travel: Tips for Saving Money",
    content: "Learn how to make the most of your travel budget with these expert tips...",
    author: "Emily Brown",
    date: "March 10, 2025",
    category: "Budget Travel",
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>(); // Get the blog ID from URL
  const post = posts.find((p) => p.id === parseInt(id || "0"));

  if (!post) {
    return <h1 className="text-center text-2xl font-bold mt-10">Post Not Found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-2">
        By <span className="text-[#2a9df4]">{post.author}</span> | {post.date}
      </p>
      <p className="text-lg text-gray-700 mt-4">{post.content}</p>
    </div>
  );
};

export default BlogPost;
