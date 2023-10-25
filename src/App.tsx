import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import { AdminLayout, MainLayout } from './layout';
import { Blogs } from './pages/admin';
import { Login } from './pages/authentication';
import { About, Blogs as ClientBlogs, Contact, Home, Library, Location, Specialty, Tour } from './pages/client';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='locations' element={<Location />} />
        <Route path='tour' element={<Tour />} />
        <Route path='specialty' element={<Specialty />} />
        <Route path='library' element={<Library />} />
        <Route path='blogs' element={<ClientBlogs />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Navigate to='/admin/blogs' />} />
        <Route path='blogs' element={<Blogs />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
