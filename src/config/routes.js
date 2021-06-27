import HomePage from '../pages/HomePage';
import AboutMe from '../pages/AboutMe/AboutMe';
import Contact from '../pages/Contact';
import Blogs from '../pages/Blogs/Blogs';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/about-me',
    component: AboutMe
  },
  {
    exact: true,
    path: '/contact',
    component: Contact
  },
  {
    path: '/blogs',
    exact: true,
    component: Blogs
  },
  {
    path: '/blogs/:id',
    component: Blogs
  }
]

export default routes;