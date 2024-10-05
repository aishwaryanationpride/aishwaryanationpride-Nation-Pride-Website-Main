import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "In today’s fast-paced digital world, having a sleek, user-friendly website is key to capturing your audience's attention.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Gourav Mittal",
      image: "/images/blog/author-01.png",
      designation: "Founder @NationPride",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Daily practice to studying the work of design legends, these tips will help you think creatively, use tools more efficiently, and stay updated on the latest design trends.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Divyansh dubey",
      image: "/images/blog/author-02.png",
      designation: "Co-Founder @NationPride",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Efficient coding is not just about typing faster; it's about working smarter.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Aishwarya chaudhari",
      image: "/images/blog/author-0.png",
      designation: "Co-Founder @NationPride",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
