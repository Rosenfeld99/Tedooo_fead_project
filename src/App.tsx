import "./App.css";

import Navbar from "./components/menu/Navbar";
import PostList from "./components/feed/PostList";

const App = () => {
  return (
    <div className="px-5 md:px-3 xl:px-0 min-h-screen w-full bg-primary">
      {/* Navbar */}
      <Navbar/>

      {/* Post List */}
      <PostList/>
    </div>
  );
};

export default App;
