import Home from './pages/Home';
import Products from './pages/Products';

const mainRoutes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/products",
    name: "products",
    component: Products
  },
];

const otherRoutes = [];

export {mainRoutes, otherRoutes};
