import styled from "styled-components/native";


export const StatusBar = styled.StatusBar``;

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #34495e;
  justify-content: space-between;
  padding: 10px 10px;
  width: 100%;
`;
export const TextHeader = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 27px;
`;
export const CalloutContent = styled.View`
  width: 250px;
  justify-content: center;
`;
export const CalloutText = styled.Text`
  color: #2ecc71;
  font-weight: bold;
`;
export const ImageHeader = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;
export const ImageMarker = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 8px;
`;
