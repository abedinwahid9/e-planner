/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Pages/Home/Home";
import Gallery from "./components/Pages/Gallery/Gallery";
import OurTeam from "./components/Pages/OurTeam/OurTeam";
import BookOnline from "./components/Pages/BookOnline/BookOnline";
import Aboutus from "./components/Pages/Aboutus/Aboutus";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Login/Register";
import CardDetails from "./components/Card/CardDetails";
import { createContext, useEffect, useState } from "react";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Error from "./components/Pages/Error/Error";
import UserIgnored from "./components/PrivateRoute/UserIgnored";

export const contextApi = createContext();

function App() {
  const [data, setData] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("reviews.json"),
        },
        {
          path: "/gallery",
          element: (
            <PrivateRoute>
              <Gallery></Gallery>
            </PrivateRoute>
          ),
        },
        {
          path: "/our_team",
          element: <OurTeam></OurTeam>,
        },
        {
          path: "/online_book",
          element: (
            <PrivateRoute>
              <BookOnline></BookOnline>
            </PrivateRoute>
          ),
          loader: () => fetch("serviecs.json"),
        },
        {
          path: "/about_us",
          element: <Aboutus></Aboutus>,
        },
        {
          path: "/login",
          element: (
            <UserIgnored>
              <Login></Login>
            </UserIgnored>
          ),
        },
        {
          path: "/register",
          element: (
            <UserIgnored>
              <Register></Register>
            </UserIgnored>
          ),
        },
        {
          path: "/:id",
          element: (
            <PrivateRoute>
              <CardDetails></CardDetails>
            </PrivateRoute>
          ),
          loader: () => fetch("serviecs.json"),
        },
      ],
    },
  ]);

  useEffect(() => {
    fetch("/serviecs.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AuthProvider>
        <contextApi.Provider value={data}>
          <RouterProvider router={router} />
        </contextApi.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
