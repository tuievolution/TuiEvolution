import { lazy } from 'react';

// Lazy loading ile component'leri yükleme
const Main = lazy(() => import('../pages/Home/Main'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const AboutUs = lazy(() => import('../pages/AboutUs/AboutUs'));
const EvrimAluc = lazy(() => import('../pages/AboutUs/EvrimAluc'));
const TuanaAkyildiz = lazy(() => import('../pages/AboutUs/TuanaAkyildiz'));
const Profile = lazy(() => import('../pages/Profile/Profile'));

// Admin sayfaları (eğer varsa)
// const AdminDashboard = lazy(() => import('../pages/Admin/Dashboard'));

export const routes = [
  {
    path: '/',
    element: <Main />,
    name: 'Ana Sayfa',
    exact: true,
    isPublic: true,
  },
  {
    path: '/projects',
    element: <Projects />,
    name: 'Projeler',
    isPublic: true,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
    name: 'Hakkımızda',
    isPublic: true,
  },
  {
    path: '/about-us/evrim-aluc',
    element: <EvrimAluc />,
    name: 'Evrim Aluç',
    isPublic: true,
  },
  {
    path: '/about-us/tuana-akyildiz',
    element: <TuanaAkyildiz />,
    name: 'Tuana Akyıldız',
    isPublic: true,
  },
  {
    path: '/profile',
    element: <Profile />,
    name: 'Profil',
    isPublic: false, // Giriş gerektirir
  },
  // Admin routes (örnek)
  // {
  //   path: '/admin',
  //   element: <AdminDashboard />,
  //   name: 'Admin',
  //   isPublic: false,
  //   requiresAdmin: true,
  // },
];

// Navigasyon için kullanılacak route'lar (NavBar'da gösterilecekler)
export const navRoutes = routes.filter(route => 
  route.name && route.isPublic && !route.path.includes('/about-us/')
);