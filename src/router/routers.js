import home from '@/components/home/1'
import classify from '@/components/classify/2'
import special from '@/components/special/3'


export default [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/special',
      name: 'special',
      component: special
    }
]
