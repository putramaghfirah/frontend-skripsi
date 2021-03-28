/**
 *
 * Navbar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';

interface Props {}

export function Navbar(props: Props) {
  return (
    <Wrapper>
      <ItemLeft>
        <Link to="/">
          <Logo>Course</Logo>
        </Link>
        <Search>
          <InputSearch placeholder={` What do you want to learn today?`} />
          <Button>Search</Button>
        </Search>
      </ItemLeft>
      <ItemRight>
        <Item>
          <Link to="/login">Sign in</Link>
        </Item>
      </ItemRight>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  width: 100vw;
  height: 62px;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Logo = styled.p`
  padding: 30px;
  font-size: 21px;
  font-weight: 500;
`;

const InputSearch = styled.input`
  display: block;
  width: 100%;
  color: #575757;
  background-color: #fff;
  border: 1px solid #e5e5ea;
  border-radius: 6px 0 0 6px;
  padding: 0 15px;
  height: 38px;
  width: 600px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;

  ::placeholder {
    font-size: 14px;
    color: black;
  }
`;

const Button = styled.button`
  border-radius: 0 6px 6px 0;
  border: transparent;
  background-color: ${p => p.theme.primary};
  color: white;
  padding: 0 15px;
  transition: 0.2s;

  :hover {
    outline: none;
    background-color: rgba(79, 70, 229, 1);
  }
`;

const Search = styled.div`
  display: flex;
  ${InputSearch}:focus {
    border: 2px solid ${p => p.theme.primary};
    outline: none;
  }
`;

const ItemRight = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  list-style: none;
  padding: 20px;
  a {
    text-decoration: none;
    color: ${p => p.theme.fontColor(0.7)};
    transition: 0.3s;
  }

  a:hover {
    color: ${p => p.theme.fontColor(1)};
  }
`;
