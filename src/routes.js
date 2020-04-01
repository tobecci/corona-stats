import Home from './components/Home.vue';
import About from './components/About.vue';
import Conferences from './components/Conferences.vue';
import Contact from './components/Contact.vue';
import Csr from './components/Csr.vue';
import People from './components/People.vue';
import Technology from './components/Technology.vue';
import Training from './components/Training.vue';
import Sme from './components/Sme.vue';
import Global from './components/Global.vue';

export default [
    {path:'/',component:Home},
    {path:'/about',component:About},
    {path:'/conferences',component:Conferences},
    {path:'/contact',component:Contact},
    {path:'/csr',component:Csr},
    {path:'/people',component:People},
    {path:'/technology',component:Technology},
    {path:'/training',component:Training},
    {path:'/sme',component:Sme},
    {path:'/global',component:Global},
]