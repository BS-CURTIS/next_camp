import styled from "styled-components";

export const NavBox = styled.nav`
  display: block;
  width: 100%;
  background: #333;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const NavUl = styled.ul`
  display: flex;
  width: 100%;
  background: #333;
`;

export const NavLi = styled.li`
  list-style: none;
`;

export const NavA = styled.a`
  display: block;
  color: #999;
  padding: 15px 20px;
`;

export const NavLogo = styled.div`
  display: block;
  width: 128px;
`;

export const Contatiner = styled.div`
  flex: 1 1 0%;
  width: 1080px;
  margin: 50px auto;
`;
export const PostUl = styled.ul`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
`;
export const PostLi = styled.li<{ theme: any }>`
  width: 15rem;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition-duration: 0.2s;
`;
export const PostTitle = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  div {
    font-size: 1rem;
    margin: 0px 0px 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--text1);
  }
`;
export const PostText = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  div {
    margin: 0px 0px 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    height: 3.9375rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PostImage = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  padding: 1rem 0;
`;

export const ModeBox = styled.div<{ theme: any }>`
  padding: 15px 20px;

  input[type="checkbox"] {
    position: absolute;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    display: block;
    position: relative;
    width: 75px;
    height: 34px;
    border-radius: 17px;
    background-color: ${({ theme }) => theme.toggleBackground};
    transition-duration: 0.2s;
    border: ${({ theme }) => theme.toggleBorder};
  }

  label span {
    position: absolute;
    left: 3px;
    top: 2px;
    z-index: 1;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.toggleCircle};
    transition-duration: 0.2s;
  }

  label:before,
  label:after {
    position: absolute;
    top: 0;
    width: 34px;
    font-size: 11px;
    line-height: 34px;
    color: ${({ theme }) => theme.toggleText};
    text-align: center;
  }

  label:before {
    left: 0;
    content: "Light";
    color: ${({ theme }) => theme.toggleText};
  }

  label:after {
    right: 0;
    content: "Dark";
  }

  input:checked + label {
    background-color: ${({ theme }) => theme.toggleBackground};
  }

  input:checked + label span {
    transform: translateX(40px);
    background: ${({ theme }) => theme.toggleCircle};
  }
`;
