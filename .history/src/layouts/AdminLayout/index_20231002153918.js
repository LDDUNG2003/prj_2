import Header from './Header'
import Admin from '~';

function AdminLayout({children}) {
    return ( 
       <>
       <Header/>
       <div className="content"></div>
       </>
     );
}

export default AdminLayout;