import SearchIcon from '@mui/icons-material/Search';
import "./searchbar.scss"
import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <form className="searchBar">
      <input type="text" placeholder="Products..." />
      <button type="submit">
        {screenWidth < 600 ? <SearchIcon /> : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
