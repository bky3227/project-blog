import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewPostPage from "./pages/ViewPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "./components/ui/sonner";
import SignUpForm from "./pages/SignUpForm";
import LogInForm from "./pages/LogInForm";
import Register from "./pages/Register";
// import ProfilePage from "./pages/ProfilePage";
import TestProfile from "./pages/TestProfile";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import AdminArticlePage from "./pages/Admin/ArticleManagement/ArticleManagementPage";
import CreateArticlePage from "./pages/Admin/ArticleManagement/CreateArticle";
import CategoryManagement from "./pages/Admin/CategoryManagement/CategoryManagementPage";
import CreateCategoryPage from "./pages/Admin/CategoryManagement/CreateCategory";
import ProfileManagement from "./pages/Admin/ProfileManagement/ProfileManagement";
import NotificationPage from "./pages/Admin/NotificationManagement/NotificationManagement";
import ResetPasswordPage from "./pages/Admin/ResetPassword/ResetPassword";
import HealthTestPage from "./pages/HealthTestPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<ViewPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<TestProfile />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/admin/article" element={<AdminArticlePage />} />
          <Route path="/admin/create-article" element={<CreateArticlePage />} />
          <Route path="/admin/category" element={<CategoryManagement />} />
          <Route path="/admin/create-category" element={<CreateCategoryPage />} />
          <Route path="/admin/profile" element={<ProfileManagement />} />
          <Route path="/admin/notification" element={<NotificationPage />} />
          <Route path="/admin/reset-password" element={<ResetPasswordPage />} />
          <Route path="/test-health" element={<HealthTestPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors />
    </>
  );
}

export default App;