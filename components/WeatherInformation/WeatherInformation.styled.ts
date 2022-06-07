import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  align-self: center;
  justify-content: space-between;
  max-width: 960px; 
  width: 100%;
  border: 4px solid #82807F;
	border-top: none;
  background-color: #E3E8F0;
`;

export const CloseButton = styled.button`
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  top: 10px;
  right: 10px;
  content: "";
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
`;

