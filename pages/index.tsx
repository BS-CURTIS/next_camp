import React, { useContext } from "react";
import { GetStaticProps } from "next";
import {
  PostUl,
  PostLi,
  PostText,
  PostImage,
  Contatiner,
} from "../component/styles/styled";
import Image from "next/image";
import { node, posts } from "../interface/common";
import { ThemeContext } from "./_app";

const Index = ({ posts }: posts) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Contatiner>
      <PostUl>
        {posts.map((post: node) => (
          <PostLi key={post.id} theme={theme}>
            <PostImage>
              <Image
                src={post.thumbnailUrl}
                width={150}
                height={150}
                alt={post.title}
              />
            </PostImage>
            <PostText>{post.title}</PostText>
          </PostLi>
        ))}
      </PostUl>
    </Contatiner>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=35"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default Index;
