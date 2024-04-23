import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from './views/layouts/pages/Admin';
import AdminDashboard from './views/pages/admin/Dashboard';
import AdminPet from './views/pages/admin/Pet';
import AdminPets from './views/pages/admin/Pets';
import AdminPetRecord from './views/pages/admin/PetRecord';
import AdminTools from './views/pages/admin/Tools';
import AppLayout from './views/layouts/pages/App';
import Dashboard from './views/pages/app/Dashboard';
import Pet from './views/pages/app/Pet';
import Pets from './views/pages/app/Pets';
import PetRecord from './views/pages/app/PetRecord';
import NotFound from './views/pages/errors/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'pets',
        children: [
          {
            path: '',
            element: <Pets />
          },
          {
            path: ':id',
            element: <Pet />
          },
          {
            path: ':petId/records/:recordId',
            element: <PetRecord />
          },
        ],
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <AdminDashboard />
      },
      {
        path: 'pets',
        children: [
          {
            path: '',
            element: <AdminPets />
          },
          {
            path: ':id',
            element: <AdminPet />
          },
          {
            path: ':petId/records/:recordId',
            element: <AdminPetRecord />
          },
        ],
      },
      {
        path: 'tools',
        element: <AdminTools />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  },
]);

export default router;
