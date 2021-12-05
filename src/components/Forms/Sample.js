import { StyledSample } from './Sample.styled';

export function Card({ item: { id, title, body, image } }) {
  return (
    <StyledSample layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </StyledSample>
  );
}

export default Card;
