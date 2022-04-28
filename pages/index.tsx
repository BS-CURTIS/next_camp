import React from "react";
import { GetStaticProps } from "next";
import { Contatiner } from "../component/styles/styled";
import { body } from "../interface/common";

import axios from "axios";
import IndexContent from "../component/contents/indexContent";

const Index = ({ body }: body) => {
  const { items } = body;

  return (
    <Contatiner>
      <IndexContent body={items} />
    </Contatiner>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get(
    `${process.env.API_BASE_LIST}?MobileOS=ETC&MobileApp=CAMP&_type=json&ServiceKey=eBL%2BCtX6h7sJAbi%2BnteZ72T3WWPGYuVXecg%2FbnWu34ifsQqa%2BuVRuZgdI9NVnGT83mAgY3gEj%2B8UJ7H9B1qTag%3D%3D`
  );
  const {
    data: {
      response: { body },
    },
  } = res;

  return {
    props: {
      body,
    },
    revalidate: 10,
  };
};

export default Index;
