import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "./SearchBar";
import "./Feed.css";

const Feed = () => {
  const [pins, setPins] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPins();
  }, [page, searchTerm]);

  const fetchPins = async () => {
    try {
      const url = searchTerm
        ? `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${searchTerm}`
        : `https://api.unsplash.com/photos?page=${page}&per_page=20`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await response.json();
      const results = searchTerm ? data.results : data;

      setPins((prevPins) => (page === 1 ? results : [...prevPins, ...results]));
      if (results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching pins:", error);
    }
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    setPage(1); // Reset to the first page for new search results
  };

  return (
    <div className="feed-container">
      <div className="sbox">
        <SearchBar onSearch={handleSearch} />
      </div>
      <InfiniteScroll
        dataLength={pins.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>All pins loaded</p>}
      >
        <Masonry
          breakpointCols={{ default: 5, 1100: 4, 700: 3, 500: 2 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {pins.map((pin) => (
            <div key={pin.id} className="pin">
              <img src={pin.urls.regular} alt={pin.alt_description} />
              <div className="overlay">
                <p className="title">{pin.alt_description || "😊"}</p>
                <button className="save-button">Save</button>
              </div>
            </div>
          ))}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};

export default Feed;
