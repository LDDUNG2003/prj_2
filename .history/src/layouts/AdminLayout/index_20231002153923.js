import Header from './Header'
import AdminMenu from '~';

function AdminLayout({children}) {
    return ( 
       <>
       <Header/>
       <div className="content"></div>
       </>
     );
}

export default AdminLayout;