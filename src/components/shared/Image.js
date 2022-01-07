import styled from 'styled-components';

const ImageWrapper = styled.figure`
  border: 1px solid pink;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Caption = styled.figcaption`
  padding-top: 2;
`;

const Image = ({ src, alt, caption }) => {
  return (
    <ImageWrapper>
      <Img src={src} alt={alt} />
      <Caption>{caption || 'Testing Caption'}</Caption>
    </ImageWrapper>
  );
};

export default Image;
