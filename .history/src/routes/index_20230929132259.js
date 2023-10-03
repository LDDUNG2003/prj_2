import Home from '~/pages/home'
import News from '~/pages/news'
import Contact from '~/pages/contact'
import page404 from '~/pages/notfoud'
import Login from '~/pages/login'
import AdminLocal from '~/pages/adminLocal'
import Upload from '~/pages/adminLocal/upLoad'

const publicRoute = [
    {path: '/',component: Home},
    {path: '/news',component: News},
    {path: '/contact',component: Contact},
    {path: '/*',component: page404, layout: 'notlayout'},
    {path: '/login',component: Login,layout: 'notlayout'},
    {path: '/adminLocal',component:AdminLocal,layout: 'notlayout'},
]

const AdminRoute = [
    {path: '/AdminUpLoad',component:Upload},
    {path: '/pageLocalAdmin',component:LocaPage}
]

export  { AdminRoute, publicRoute}