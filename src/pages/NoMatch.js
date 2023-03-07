// Components
import ErrorMsg from '../components/UI/ErrorMsg';

// Design
import './NoMatch.css';

const NoMatch = () => {
  return (
    <div className="page nomatch">
      <ErrorMsg msg="No match found here!" />
    </div>
  );
};

export default NoMatch;