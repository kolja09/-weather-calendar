import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 20px;
	width: 100%;
`;

export const InfoBlock = styled.div`
  display: flex;
	justify-content: space-between;
  flex-direction: column;
  align-items: center;
	padding: 0 12px;
  margin: 5px 5px;
  height: 176px;

  &:not(:last-child) {
    border-right: 1px solid #82807f;
  }
`;

export const DataWeather = styled.div`
  font-size: 20px;
  padding: 5px;
`;
