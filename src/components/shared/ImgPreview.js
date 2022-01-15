import styled from 'styled-components';

const StyledImg = styled.img`
  display: block;
  margin: 0.85rem;
  border: 1px solid grey;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const ImgPreview = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />;
};

export default ImgPreview;
