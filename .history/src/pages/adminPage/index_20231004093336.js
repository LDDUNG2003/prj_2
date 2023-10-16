import { Link } from "react-router-dom";
import { AdminURL} from "./router";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AdminLayout from "~/layouts/AdminLayout";

const adminAccount = true;
class AdminLocal extends Component {
    if(adminAccount) {
        render()
        {
            return (
                <Router>
                  <Routes>
                     {AdminURL.map((route ,index) => {
                         const Page = route.component
                         const Path = route.path
                         
                         return(
                         <Route
                             key={index}
                             Path={Path}
                             element={
                               <AdminLayout>
                                 <Page/>
                               </AdminLayout>
                             }/>); 
                         
                     })}
                 </Routes>
                </Router>)
                
             }
        }
    
    }

export default AdminLocal