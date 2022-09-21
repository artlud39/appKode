import { GlobalStyle } from './style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import DetailsPage from '../../pages/details-page/details-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App(): JSX.Element {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Details}
            element={<DetailsPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

