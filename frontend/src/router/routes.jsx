import { lazy } from 'react';

// Named exportları (const Main vb.) React.lazy'nin anlayacağı formatta yakalar
const lazyNamed = (path, name) => 
  lazy(() => import(`../pages/${path}`).then(m => ({ default: m[name] })));

export const routes = [
  { path: "/", name: "Ana Sayfa", element: lazyNamed('Home/Main', 'Main') },
  { path: "/projects", name: "Projeler", element: lazyNamed('Projects/Projects', 'Projects') },
  { path: "/about-us", name: "Hakkımızda", element: lazyNamed('AboutUs/AboutUs', 'AboutUs') },
  { path: "/about-us/evrim-aluc", name: "Evrim Aluç", element: lazyNamed('AboutUs/EvrimAluc', 'EvrimAluc') },
  { path: "/about-us/tuana-akyildiz", name: "Tuana Akyıldız", element: lazyNamed('AboutUs/TuanaAkyildiz', 'TuanaAkyildiz') },
  { path: "/profile", name: "Profil", element: lazyNamed('Profile/Profile', 'Profile') }
];