import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
`;

export const DatesWrapper   = styled.div`
  display: flex;
  justify-content: center;
	flex-wrap: wrap;
`;

export const Date = styled.div<{
	isChosen?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0 0;
  width: 160px;
  height: 160px;
  font-size: 65px;
  color: #82807F;
  border: 4px solid #82807F;
  cursor: pointer;
	${({ isChosen }) => isChosen ? `
		border-bottom-color: #E3E8F0;
		background-color: #E3E8F0;
		color: #414754;
	` : ``};
	
  &:hover {
    color: #414754;
    transition: all .2s; 
    background-color: #E3E8F0; 
  }
`;