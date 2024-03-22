import styled from "styled-components";

export const Group = styled.div`
  display: flex;
`;

export const MyInput = styled.input`
  background: #ffffff;
  border: 1px solid gray;
  border-radius: 15px 0 0 15px;
  text-align: right;
  outline: none;
  font-size: 20px;
  padding: 0 10px;
  max-width: 150px;
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background: #ffffff;
  border: 1px solid gray;
  border-radius: 0 15px 15px 0;
  text-align: right;
  outline: none;
  padding: 5px 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownMenu = styled.div`
  background-color: #ffffff;
  position: absolute;
  border: 1px solid gray;
  border-radius: 10px;
  top: 65px;
  color: #000000;
  padding: 5px;
`;

export const DropdownMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
    border-radius: 10px;
  }
`;