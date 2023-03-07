import Image from "./Image";
import gif from '../../assets/images/loading.gif';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <Image src={gif} alt="loading" />
    </div>
  );
};

export default Loading;