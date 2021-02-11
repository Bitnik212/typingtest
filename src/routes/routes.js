import Home from '../views/components/Home.vue'
import HomeLayout from '../views/layouts/Home.vue'

const routes = [
    {
      path: '/',
      redirect: 'home',
      component: HomeLayout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
        
      ]
    }
  ];
  
  export default routes;