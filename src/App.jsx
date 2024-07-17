import  React from 'react';
import {BrowserRouter ,Route , Routes} from "react-router-dom"
import Profile from "./pages/profile/Profile";
import UsersRoute from './pages/profile/components/UsersRoute.jsx';
import Content from './components/Content.jsx';
import OtherRoutes from './pages/profile/components/OtherRoutes.jsx';

function App(){
  
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Profile />}>
         <Route path="/route-1" element={ <OtherRoutes name="This is Greeting!" />} />
            <Route path="/route-2" element={ <UsersRoute />} >
              <Route path="/route-2/user-1" element={ <Content name=".User 1:" />} />
              <Route path="/route-2/user-2" element={ <Content name=".User 2:" />} />
              <Route path="/route-2/user-3" element={ <Content name=".User 3:" />} />
              <Route path="/route-2/user-4" element={ <Content name=".User 4:" />} />
            </Route>
            <Route path="/route-3" element={ <OtherRoutes name="This is third route" />} />
            <Route path="/route-4" element={ <OtherRoutes name="This is fourth route"  />} />
            <Route path="/route-5" element={ <OtherRoutes name="This is fifth route"  />} />
         </Route>
      </Routes>
   </BrowserRouter>
  ) 
}
export default App;