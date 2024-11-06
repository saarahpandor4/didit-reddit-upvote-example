import { PostList } from "../components/PostList";

export const metadata = {
  title: "Home page",
  description: "Enjoy viewing the posts!",
};

export default async function Home() {
  return <PostList />;
}
