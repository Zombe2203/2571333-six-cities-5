import { Link } from 'react-router-dom';
import { AppRoute } from '../../recources/routes.ts';
import PageHeader from '../../components/page-header/page-header.tsx';

function NotFoundPage(): JSX.Element {

  return (
    <div className="page page--gray page--notfound">
      <PageHeader />
      <div>
        <h1>404 Not Found</h1>
        <p>This page does not (yet) exist</p>
        <button>
          <Link to={AppRoute.Main}>Try going there</Link>
        </button>
      </div>
    </div>
  );
}


export default NotFoundPage;
