import Home from '~/pages/home'
import News from '~/pages/news'
import page404 from '~/notfoud'

const publicRoute = [
    {path: '/',component: Home},
    {path: '/news',component: News},
    {path: '/*',component: page404, layout: 'notlayout'}
]

export  {publicRoute}