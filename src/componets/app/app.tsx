import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppRoute } from "../../config";
import MainPage from "../../pages/main/main";
import BlogPage from "../../pages/blog/blog";
import EventsPage from "../../pages/events/events";
import Page404 from "../../pages/404/404";
import AboutPage from "../../pages/about/about";

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Routes>

        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />

        <Route
          path={AppRoute.Blog}
          element={<BlogPage />}
        />

        <Route
          path={AppRoute.Events}
          element={<EventsPage />}
        />

        <Route
          path={AppRoute.About}
          element={<AboutPage />}
        />

        <Route
          path='*'
          element={<Page404 />}
        />

      </Routes>
    </HelmetProvider>
  );
}

export default App;
