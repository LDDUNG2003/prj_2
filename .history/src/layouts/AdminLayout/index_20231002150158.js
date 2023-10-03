import Header from './Header'

function AdminLayout({children}) {
    return ( 
       <>
       <Header/>
       <div className="content">{children}</div>
       </>
     );
}

export default AdminLayout;