import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CollectionPreviewContainer = styled.div`
.collection-preview {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;

  &:hover {
    color: grey;
  }
`;


export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

