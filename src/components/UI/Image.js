
const Image = ({ src, alt }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
    </figure>
  );
};

export default Image;