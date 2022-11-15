import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <h1>The requested page is not found</h1>
      <Link to="/">Please visit the home page</Link>
    </div>
  );
};

export default PageNotFound;
