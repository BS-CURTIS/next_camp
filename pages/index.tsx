import React from 'react';
import { GetStaticProps } from 'next';
import { Contatiner } from '../component/styles/styled';
import { body } from '../interface/common';

import axios from 'axios';
import IndexContent from '../component/contents/indexContent';

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
    `${process.env.API_BASE_LIST}?MobileOS=ETC&MobileApp=CAMP&_type=json&ServiceKey=${process.env.API_KEY}`
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
