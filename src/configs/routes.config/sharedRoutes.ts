// src/configs/routes.config/sharedRoutes.ts
import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: '/',
        component: lazy(() => import('@/views/Home')),
        authority: []
    },
    // You can add more shared routes here later!
]

export default sharedRoutes
