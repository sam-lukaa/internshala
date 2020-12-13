import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts/index";
import Pagination from "./components/Pagination/index";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://classmarker-app.herokuapp.com/mockData"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetch();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col justify-center w-auto m-4">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        number={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPosts={posts.length}
        paginate={paginate}
        className="bg-gray-800"
      />
    </div>
  );
}
