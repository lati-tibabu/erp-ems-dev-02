import { createBrowserRouter } from 'react-router-dom'
import authRoutes from './auth_routes'
import adminRoutes from './admin_routes'

const router = createBrowserRouter(
    [
        authRoutes,
        adminRoutes,
    ]
)

export default router;