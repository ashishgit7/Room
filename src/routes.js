import searchresult from './searchresult.vue';
import home from './home.vue';

export default [
    // {path:'/' ,component:app },
    {path:'/result',name:'result',component: searchresult,props: true},
    {path:'/',component: home},
]