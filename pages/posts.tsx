import {
  PostUl,
  PostLi,
  PostText,
  PostTitle,
  Contatiner,
} from "../component/styles/styled";
import { node, posts } from "../interface/common";

const photos = ({ posts }: posts) => {
  return (
    <Contatiner>
      <PostUl>
        {posts.map((post: node) => (
          <PostLi key={post.id}>
            <PostTitle>
              <div>{post.title}</div>
            </PostTitle>
            <PostText>
              <div>{post.body}</div>
            </PostText>
          </PostLi>
        ))}
      </PostUl>
    </Contatiner>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_end=35"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
export default photos;
