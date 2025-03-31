// blogData.ts
export interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image?: string;
  }
  
  export const posts: BlogPost[] = [
    {
      id: 1,
      title: "10 Must-Visit Destinations in 2025",
      content: `**10 Must-Visit Destinations in 2025**\n\nIf you're planning your next adventures`,
      author: "Rudr",
      date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: "Travel Tips",
      image: "/path-to-travel-image.jpg",
    },
    {
      id: 2,
      title: "Best Budget Travel Tips",
      content: `# **How to Travel on a Budget?**\n\nTraveling doesn't have to be expensive...`,
      author: "Rudr",
      date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: "Budget Travel",
      image: "/path-to-travel-image.jpg",
    }
  ];
  