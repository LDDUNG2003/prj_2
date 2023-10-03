import AdminLocal from "~"


const AdminRoute = [
    {path: '/adminLocal',component:AdminLocal,layout: 'notlayout'},
    {path: 'adminLocal/upLoad',component:Upload,layout: 'notlayout'},
    {path: 'adminLocal/pageLocal',component:PageLocal,layout: 'notlayout'}
]

export default AdminRoute