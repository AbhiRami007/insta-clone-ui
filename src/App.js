import LandingPage from "./components/landingPage/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostView from "./components/postView/postView";
import AddPost from "./components/addPost/addPost";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/posts" element={<PostView />} />
        <Route path="/add-posts" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
