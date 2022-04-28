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
import { node, body } from "../interface/common";
import { ThemeContext } from "./_app";
import axios from "axios";
import NoImage from "../public/no_image.png";

const Index = ({ body }: body) => {
  const { theme } = useContext(ThemeContext);
  const { items } = body;

  return (
    <Contatiner>
      <PostUl>
        {items.item.map((site: node) => (
          <PostLi key={site.contentId} theme={theme}>
            <PostImage>
              {site.firstImageUrl ? (
                <Image
                  src={site.firstImageUrl}
                  width={256}
                  height={170}
                  alt={site.facltNm}
                />
              ) : (
                <Image
                  src={NoImage}
                  width={256}
                  height={170}
                  alt={site.facltNm}
                />
              )}
            </PostImage>
            <PostText>{site.facltNm}</PostText>
            <PostText>{site.addr1}주소</PostText>
            <PostText>{site.addr2}주소</PostText>
            <PostText>{site.resveCl}예약여부</PostText>
            <PostText>{site.resveUrl}예약주소</PostText>
            <PostText>{site.sitedStnc}사이트간격</PostText>
            <PostText>{site.siteMg1Width}가로크기</PostText>
            <PostText>{site.siteMg2Width}가로크기</PostText>
            <PostText>{site.siteMg3Width}가로크기</PostText>
            <PostText>{site.siteMg1Vrticl}세로크기</PostText>
            <PostText>{site.siteMg2Vrticl}세로크기</PostText>
            <PostText>{site.siteMg3Vrticl}세로크기</PostText>
            <PostText>{site.siteMg1Co}수량</PostText>
            <PostText>{site.siteMg2Co}수량</PostText>
            <PostText>{site.siteMg3Co}수량</PostText>
            <PostText>{site.siteBottomCl1}잔디</PostText>
            <PostText>{site.siteBottomCl2}파쇄</PostText>
            <PostText>{site.siteBottomCl3}데크</PostText>
            <PostText>{site.siteBottomCl4}자갈</PostText>
            <PostText>{site.siteBottomCl5}맨흙</PostText>
          </PostLi>
        ))}
      </PostUl>
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
