import Home from '~/pages/home'
import News from '~/pages/news'
import Contact from '~/pages/contact'
import page404 from '~/pages/notfoud'
import Login from '~/pages/login'
import AdminLocal from '~/pages/adminPage'
import introduct from '../pages/introduct'
import Upload from '~/pages/adminPage/upLoad'
import LocaPage from '~/pages/adminPage/pageLocal'


const publicRoute = [
    {path: '/',component: Home},
    {path: '/news',component: News},
    {path: '/contact',component: Contact},
    {path: '/about',component: introduct},
    {path: '/*',component: page404, layout: 'notlayout'},
    {path: '/login',component: Login,layout: 'notlayout'},
    {path: '/adminLocal/*',component:AdminLocal,layout: 'adminLayout'},
]

const AdminRoute = [
]

export  { AdminRoute, publicRoute}