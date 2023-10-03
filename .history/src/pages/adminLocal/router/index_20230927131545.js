import LocaPage from '../pageLocal';
import Upload from '../upLoad';

const AdminRoute = [
    {path: '/upLoad',component:Upload,layout: 'notlayout'},
    {path: 'adminLocal/pageLocal',component:PageLocal,layout: 'notlayout'}
]

export default AdminRoute