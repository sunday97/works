import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HamePage";
import CourseListPage from "./pages/CourseListPage";
import QuestionListPage from "./pages/QuestionListPage";
import CoursePage from "./pages/CoursePage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import WishlistPage from "./pages/WishlistPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
            {/* : 유동적이란 뜻 */}
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            {/* <Route path="" element={<CourseListPage />} /> */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
