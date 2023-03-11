import './404-screen.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function ErrorNotFound(): JSX.Element {
  return (
    <div className="error-block">
      <h3 className="error-block-name">404 page not found</h3>
      <Link to={AppRoute.Root} className="error-block-link">Go back to the main page</Link>
    </div>
  );
}

export default ErrorNotFound;
