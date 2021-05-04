export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/theuser',
        name: 'Theuser',
        component: () => import('../views/Theuser.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue')
    },
    {
        path: '/page',
        name: 'Page',
        component: () => import('../views/Page.vue'),
        children: [
            {
                path: '/',
                name: 'Pagehome',
                component: () => import('../views/page/Pagehome.vue'),
            },
            {
                path: '/page/pagedetails',
                name: 'Pagedetails',
                component: () => import('../views/page/Pagedetails.vue'),
            },
            {
                path: '/page/pagerental',
                name: 'Pagerental',
                component: () => import('../views/page/Pagerental.vue'),
            },
            {
                path: '/page/pageevaluation',
                name: 'Pageevaluation',
                component: () => import('../views/page/Pageevaluation.vue'),
            },
            {
                path: '/page/pagemy',
                name: 'Pagemy',
                component: () => import('../views/page/Pagemy.vue'),
            }
        ]
    },
    {
        path: '/addcar',
        name: 'Addcar',
        component: () => import('../views/Addcar.vue')
    },
]