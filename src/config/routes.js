import HomePage from '../pages/HomePage';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about-me',
    component: AboutMe,
  },
  {
    exact: true,
    path: '/contact',
    component: Contact,
  },
  {
    path: '/blogs',
    exact: true,
    component: Blogs,
  },
  {
    path: '/blogs/:id',
    component: Blog,
  },
];

export default routes;
