import Home from '~/pages/home'
import News from '~/pages/news'
import Contact from '~/pages/contact'
import page404 from '~/pages/notfoud'
import Login from '~/pages/login'
import AdminLocal from '~/pages/adminLocal'
import Upload from '~/pages/adminLocal/upLoad'
import PageLocal from '~/pages/adminLocal/pageLocal'

const publicRoute = [
    {path: '/',component: Home},
    {path: '/news',component: News},
    {path: '/contact',component: Contact},
    {path: '/*',component: page404, layout: 'notlayout'},
    {path: '/login',component: Login,layout: 'notlayout'},
    {path: '/adminLocal',component:AdminLocal,layout: 'notlayout'},
    {path: 'adminLocal/upLoad',component:Upload,layout: 'notlayout'},
    {path: 'adminLocal/pageLocal',component:PageLocal,layout:}
]

export  {publicRoute}