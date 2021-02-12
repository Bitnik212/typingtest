import Home from '../views/pages/Home.vue'
import Settings from '../views/pages/Settings.vue'
import Trainer from "../views/pages/Trainer.vue"
import TypingTest from '../views/pages/TypingTest.vue'
import HomeLayout from '../views/layouts/Home.vue'

import NotFound from '@/views/pages/NotFound'

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
        },
        {
          path: '/typingtest',
          name: 'TypingTest',
          component: TypingTest
        },
        {
          path: '/settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: '/trainer',
          name: 'Trainer',
          component: Trainer
        },
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ];
  
  export default routes;