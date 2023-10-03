import Header from './Header'
import AdminMenu from './AdminMenu';

function AdminLayout({children}) {
    return ( 
       <>
       <Header/>
       <div className="admin-content">
        <AdminMenu/><div className="content-admin">
          {children}
        </div>
       </div>
       </>
     );
}

export default AdminLayout;