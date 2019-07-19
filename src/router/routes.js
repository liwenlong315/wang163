import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Oneself from '../pages/Oneself/Oneself.vue'
import Shop from '../pages/Shop/Shop.vue'
import Things from '../pages/Things/Things.vue'

export default [{
    path: '/home',
    component: Home,
  },
  {
    path: '/classify',
    component: Classify,
  },
  {
    path: '/oneself',
    component: Oneself,
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path: '/things',
    component: Things,
  },
  {
    path: '/',
    redirect: '/home'
  }
]