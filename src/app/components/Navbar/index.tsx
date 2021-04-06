/**
 *
 * Navbar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { selectUser } from 'app/user/selectors';
import { userActions } from 'app/user';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { Button } from '../Button';
import { Dropdown } from '../Dropdown';

interface Props {}

export function Navbar(props: Props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  function onClick() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(userActions.deleteUser());
    dispatch(push('/login'));
  }
  return (
    <Wrapper>
      <ItemLeft>
        <Link to="/">
          <Logo>Course</Logo>
        </Link>
      </ItemLeft>
      <Search>
        {/* //TODO: add icon search in placeholder*/}
        <InputSearch placeholder={` What do you want to learn today?`} />
        <Button
          width="max-content"
          padding="0 14px"
          borderRadius="0 6px 6px 0"
          color="white"
        >
          Search
        </Button>
      </Search>
      <ItemRight>
        {user && <Dropdown />}
        {!user && (
          <Item>
            <Link to="/login">Sign in</Link>
          </Item>
        )}
      </ItemRight>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  width: 100vw;
  height: 3.5rem;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  padding: 0 20px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: ${p => p.theme.textBlack};
  }
`;

const Logo = styled.p`
  font-size: 21px;
  width: max-content;
  font-weight: 600;
`;

const InputSearch = styled.input`
  color: #575757;
  background-color: #fff;
  border: 1px solid #e5e5ea;
  border-radius: 6px 0 0 6px;
  padding: 0 15px;
  height: 38px;
  width: 40vw;
  font-size: 0.875rem;
  outline: none;
  box-sizing: border-box;

  ::placeholder {
    font-size: 0.875rem;
    color: black;
  }
  :focus {
    border: 2px solid ${p => p.theme.primary};
    outline: none;
  }
`;

const Search = styled.div`
  display: flex;
`;

const ItemRight = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  list-style: none;
  padding: 0 13px;
  font-size: 0.875rem;
  font-weight: 500;
  a {
    text-decoration: none;
    color: ${p => p.theme.textGray};
    transition: 0.3s;
  }

  a:hover {
    color: ${p => p.theme.fontColor(0, 0, 0, 1)};
  }
`;

const SignOut = styled.button`
  padding: 0;
  margin: 0;
  color: ${p => p.theme.textGray};
  background-color: inherit;
  outline: none;
  transition: 0.3s;
  :hover {
    color: ${p => p.theme.fontColor(0, 0, 0, 1)};
  }
`;
