import styled from 'styled-components';

const ImageWrapper = styled.figure`
  position: relative;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 450px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const Caption = styled.figcaption`
  position: absolute;
  inset: 10px auto auto 10px;
  padding: 5px 13px;
  border-radius: 2px;
  background-color: white;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Image = ({ src, alt, caption }) => {
  return (
    <ImageWrapper>
      <Img src={src} alt={alt} />
      {caption && <Caption>{caption}</Caption>}
    </ImageWrapper>
  );
};

export default Image;
