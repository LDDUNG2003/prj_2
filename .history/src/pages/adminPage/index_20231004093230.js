import { Link } from "react-router-dom";
import { AdminURL} from "./router";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import AdminLayout from "~/layouts/AdminLayout";

class App extends Component {
    render() {() {
    function Redirect() {
        window.location="http://localhost:3000/";
     }

    var adminAccount = true;
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