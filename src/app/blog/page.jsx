import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const metadata = {
  title: "Sikku Creation - Blog Page",
  description: "Blog description",
};

const Blog = async () => {
  const posts = await getData();           // FETCH DATA WITH AN API
  // const posts = await getPosts(slug);       // FETCH DATA WITHOUT AN API

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default Blog;