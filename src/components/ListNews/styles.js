import styled from 'styled-components/native';

export const Post = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 600;
  padding: 15px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
