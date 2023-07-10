import { Route, Routes } from "react-router";
import { Home, Bookmarks, Explore, Profile, Notification, Layout, Register, Login } from "./pages";
import "./App.css";
import RequiresAuth from "./components/RequiresAuth";
import SinglePost from "./pages/SinglePost";
import { EditProfile } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<RequiresAuth><Layout /></RequiresAuth>}> */}
        <Route index element={<Home />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/edit' element={<EditProfile />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
export default App