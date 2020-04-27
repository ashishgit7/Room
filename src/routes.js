import searchresult from './searchresult.vue';
import home from './home.vue';
import detail from './detail.vue';
import portal from './portal.vue';

export default [
    // {path:'/' ,component:app },
    {path:'/result',name:'result',component: searchresult,props: true},
    {path:'/',component: home},
    {path:'/detail:id',component: detail},
    {path:'/portal',component: portal},
]