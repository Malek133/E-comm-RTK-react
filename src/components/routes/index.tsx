import { Route, createBrowserRouter, 
    createRoutesFromElements } from "react-router-dom";
  
  import HomePage from "../HomePage";
import ErrorHandler from "../errors/ErrorHandler";
import PageNotFound from "../errors/PageNotFound";
import AddCart from "../AddCart";
import ProtectedRoute from "../auth/ProtectedRoute";
import RootLayout from "../pages/RootLayout";
import Login from "../pages/Login";
import HomeDashboard from "../Dashbord";
 
  const storageKey = 'addLoged';
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Root Layout */}
        <Route path="/" element={<RootLayout />} 
        errorElement={<ErrorHandler />}>
          <Route
            index
            element={
              <HomePage />
            }
          />
         
          <Route
            path="/AddCart"
            element={
              <AddCart />
            }
          />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute isAllowed={userData?.jwt} 
               redirectPath="/login" 
               data={userData}>
                 <HomeDashboard /> 
               </ProtectedRoute>
              
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute isAllowed={!userData?.jwt} redirectPath="/" 
              data={userData}>
                <Login />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="register"
            element={
              <ProtectedRoute isAllowed={!userData?.jwt} 
              redirectPath="/login" data={userData?.jwt}>
                <Register />
              </ProtectedRoute>
            }
          /> */}
  
        </Route>
  
        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  
  export default router;
  