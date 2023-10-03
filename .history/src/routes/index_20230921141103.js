import Home from '~/pages/home'
import News from '~/pages/news'
import Contact from '~/pages/contact'
import page404 from '~/pages/notfoud'

const publicRoute = [
    {path: '/',component: Home},
    {path: '/news',component: News},
    {path: '/product',component: Contact},
    {path: '/*',component: page404, layout: 'notlayout'}
]

export  {publicRoute}