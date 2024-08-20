import { createBrowserRouter } from 'react-router-dom'
import mainRoutes from './main_routes'
import authRoutes from './auth_routes'
import adminRoutes from './admin_routes'

const router = createBrowserRouter(
    [
        mainRoutes,
        authRoutes,
        adminRoutes,
    ]
)

export default router;