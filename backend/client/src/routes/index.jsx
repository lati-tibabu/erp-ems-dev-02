import { createBrowserRouter } from "react-router-dom";
import mainRoutes from "./main_routes";
import authRoutes from "./auth_routes";
import adminRoutes from "./admin_routes";
import principalRoutes from "./principal_routes";
import teacherRoutes from "./teacher_routes";
import studentRoutes from "./student_routes";

const router = createBrowserRouter([
  mainRoutes,
  authRoutes,
  adminRoutes,
  principalRoutes,
  teacherRoutes,
  studentRoutes,
]);

export default router;
