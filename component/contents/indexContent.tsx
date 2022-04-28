import React, { useContext } from "react";
import { PostUl, PostLi, PostText, PostImage } from "../styles/styled";
import Image from "next/image";
import { node, body } from "../../interface/common";
import { ThemeContext } from "../../pages/_app";

import NoImage from "../../public/no_image.png";
import Link from "next/link";

const IndexContent = ({ body }: body) => {
  const { theme } = useContext(ThemeContext);

  return (
    <PostUl>
      {body.item.map((site: node) => (
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
          <PostText>
            {site.addr1 && <span>{site.addr1}</span>}
            {site.addr2 && <span>{site.addr2}</span>}
          </PostText>
          <PostText>
            {site.resveUrl && site.resveCl ? (
              <Link href={site.resveUrl}>
                <a target="_blank">{site.resveCl}</a>
              </Link>
            ) : (
              "전화문의"
            )}
          </PostText>
          <PostText>
            {site.sitedStnc > 0 && (
              <>
                <strong> 사이트 간격</strong>
                <div>{site.sitedStnc}M</div>
              </>
            )}

            {(site.siteMg1Width > 0 ||
              site.siteMg2Width > 0 ||
              site.siteMg3Width > 0) && (
              <>
                <strong> 사이트 크기</strong>
                <div>
                  <span>
                    {site.siteMg1Width > 0 ? `${site.siteMg1Width}M X ` : ""}
                    {site.siteMg1Vrticl > 0 ? `${site.siteMg1Vrticl}M` : ""}
                  </span>
                  <span>
                    {site.siteMg2Width > 0 ? `${site.siteMg2Width}M X ` : ""}
                    {site.siteMg2Vrticl > 0 ? `${site.siteMg2Vrticl}M` : ""}
                  </span>
                  <span>
                    {site.siteMg3Width > 0 ? `${site.siteMg3Width}M X ` : ""}
                    {site.siteMg3Vrticl > 0 ? `${site.siteMg3Vrticl}M` : ""}
                  </span>
                </div>
              </>
            )}
          </PostText>

          {(site.siteBottomCl1 > 0 ||
            site.siteBottomCl2 > 0 ||
            site.siteBottomCl2 > 0 ||
            site.siteBottomCl3 > 0 ||
            site.siteBottomCl4 > 0 ||
            site.siteBottomCl5 > 0) && (
            <>
              {site.siteBottomCl1 > 0 ? "잔디 " : ""}
              {site.siteBottomCl2 > 0 ? "파쇄 " : ""}
              {site.siteBottomCl3 > 0 ? "데크 " : ""}
              {site.siteBottomCl4 > 0 ? "자갈 " : ""}
              {site.siteBottomCl5 > 0 ? "맨흙 " : ""}
            </>
          )}
        </PostLi>
      ))}
    </PostUl>
  );
};

export default IndexContent;
