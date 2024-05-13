import { Route, Routes } from "react-router-dom";
import { AppRoute } from "../../config";
import MainPage from "../../pages/main/main";
import BlogPage from "../../pages/blog/blog";
import EventsPage from "../../pages/events/events";
import Page404 from "../../pages/404/404";
import { HelmetProvider } from "react-helmet-async";

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
        >
          <Route path=':id' element={<Page404 />} />
        </Route>

        <Route
          path={AppRoute.Events}
          element={<EventsPage />}
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
