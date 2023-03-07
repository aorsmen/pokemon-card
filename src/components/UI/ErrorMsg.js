
import './ErrorMsg.css';

const ErrorMsg = ({ msg }) => {
  return (
    <div className="error">{msg}</div>
  );
};

export default ErrorMsg;