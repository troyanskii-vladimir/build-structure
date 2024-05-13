import Header from '../../componets/header/header';
import AboutMini from '../../componets/about-mini/about-mini';
import BlogMini from '../../componets/blog-mini/blog-mini';
import EventsMini from '../../componets/events-mini/events-mini';


function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <AboutMini />
        <EventsMini />
        {/* <BlogMini /> */}
      </main>
    </div>
  );
}

export default MainPage;
