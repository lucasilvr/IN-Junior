import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Genre from './pages/Genre';
import BookDetails from './pages/BookDetails';
import RootLayout from './RootLayout';

const router = createBrowserRouter([
  {
    path: '/', //nao sei se tem que ficar '/' ou '/login' porque no header o botao de login aponta para '/'
    element: <Login />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/genero/:nome',
        element: <Genre />,
      },
      {
        path: '/livro/:bookId',
        element: <BookDetails />,
      },
    ],
  },
]);

export default router;  