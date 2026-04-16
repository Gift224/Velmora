/*import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { apples, appliances, electronics, fashions } from "./products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./LiveSearch.css"

export default function LiveSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchRef = useRef();

  // Combine products (optimized)
  const allProducts = useMemo(() => {
    return [...apples, ...appliances, ...electronics, ...fashions];
  }, []);

  // Debounce typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Filter products
  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setResults(filtered);
  }, [debouncedSearch, allProducts]);

  // Close dropdown when clicking outside (ONLY dropdown)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]); // do NOT clear search
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown only
  const closeDropdown = () => {
    setResults([]);
  };

  // Clear input + dropdown
  const clearSearch = () => {
    setSearch("");
    setResults([]);
  };

  return (
    <>
      {/* OVERLAY }
      {results.length > 0 && (
        <div className="search-overlay" onClick={closeDropdown}></div>
      )}

      <div className="search-container" ref={searchRef}>
        {/* INPUT }
        <div className="search-input">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => {
              if (search.trim() !== "") {
                const filtered = allProducts.filter((product) =>
                  product.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
                setResults(filtered);
              }
            }}
          />

          {/* CLEAR BUTTON }
          {search && (
            <FontAwesomeIcon
              icon={faXmark}
              className="clear-icon"
              onClick={clearSearch}
            />
          )}
        </div>

        {/* DROPDOWN }
        {results.length > 0 && (
          <div className="search-dropdown">
            {results.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.category}/${product.id}`}
                className="search-item"
                onClick={closeDropdown}
              >
                {product.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}*/


/*import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apples, appliances, electronics, fashions } from "./products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./LiveSearch.css";

export default function LiveSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchRef = useRef();
  const navigate = useNavigate();

  // Combine products
  const allProducts = useMemo(() => {
    return [...apples, ...appliances, ...electronics, ...fashions];
  }, []);

  // Debounce typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Filter products
  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setResults(filtered);
  }, [debouncedSearch, allProducts]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeDropdown = () => {
    setResults([]);
  };

  const clearSearch = () => {
    setSearch("");
    setResults([]);
  };

  // Handle search icon click (navigate to full results)
  const handleIconClick = () => {
    if (search.trim() !== "") {
      navigate(`/search?query=${search}`);
      setResults([]);
    }
  };

  return (
    <>
      {/* OVERLAY }
      {results.length > 0 && (
        <div className="search-overlay" onClick={closeDropdown}></div>
      )}

      <div className="search-container" ref={searchRef}>
        {/* INPUT }
        <div className="search-input">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon"
            onClick={handleIconClick} // navigate on click
            style={{ cursor: "pointer" }}
          />

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && search.trim() !== "") {
                navigate(`/search?query=${search}`);
                setResults([]); // close dropdown
              }
            }}
            onFocus={() => {
              if (search.trim() !== "") {
                const filtered = allProducts.filter((product) =>
                  product.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                );
                setResults(filtered);
              }
            }}
          />

          {/* CLEAR BUTTON }
          {search && (
            <FontAwesomeIcon
              icon={faXmark}
              className="clear-icon"
              onClick={clearSearch}
            />
          )}
        </div>

        {/* DROPDOWN }
        {results.length > 0 && (
          <div className="search-dropdown">
            {results.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.category}/${product.id}`}
                className="search-item"
                onClick={closeDropdown}
              >
                {product.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
*/


/*
import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apples, appliances, electronics, fashions } from "./products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./LiveSearch.css";

export default function LiveSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchRef = useRef();
  const navigate = useNavigate();

  // Combine products
  const allProducts = useMemo(() => {
    return [...apples, ...appliances, ...electronics, ...fashions];
  }, []);

  // Debounce typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Filter products for dropdown
  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().trim().includes(debouncedSearch.toLowerCase().trim())
    );

    setResults(filtered);
  }, [debouncedSearch, allProducts]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeDropdown = () => {
    setResults([]);
  };

  const clearSearch = () => {
    setSearch("");
    setResults([]);
  };

  // Handle Enter key
  const handleEnterSearch = () => {
    if (search.trim() === "") {
      navigate("/"); // go to home if input is empty
    } else {
      navigate(`/search?query=${search}`);
    }
    setResults([]);
  };

  // Handle search icon click
  const handleIconClick = () => {
    handleEnterSearch();
  };

  return (
    <>
      {/* OVERLAY }
      {results.length > 0 && (
        <div className="search-overlay" onClick={closeDropdown}></div>
      )}

      <div className="search-container" ref={searchRef}>
        {/* INPUT }
        <div className="search-input">
          {/* SEARCH ICON }
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon"
            onClick={handleIconClick}
            style={{ cursor: "pointer" }}
          />

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEnterSearch();
              }
            }}
            onFocus={() => {
              if (search.trim() !== "") {
                const filtered = allProducts.filter((product) =>
                  product.title.toLowerCase().trim().includes(search.toLowerCase().trim())
                );
                setResults(filtered);
              }
            }}
          />

          {/* CLEAR BUTTON }
          {search && (
            <FontAwesomeIcon
              icon={faXmark}
              className="clear-icon"
              onClick={clearSearch}
            />
          )}
        </div>

        {/* DROPDOWN }
        {results.length > 0 && (
          <div className="search-dropdown">
            {results.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.category}/${product.id}`}
                className="search-item"
                onClick={closeDropdown}
              >
                {product.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}*/



import { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apples, appliances, electronics, fashions } from "./products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./LiveSearch.css";

export default function LiveSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState([]);

  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Combine all products once
  const allProducts = useMemo(
    () => [...apples, ...appliances, ...electronics, ...fashions],
    []
  );

  // Debounce typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Live dropdown filtering
  useEffect(() => {
    if (!debouncedSearch) {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setResults(filtered.slice(0, 6));
  }, [debouncedSearch, allProducts]);

  // Close dropdown when outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  // Search submit
  const handleSearch = () => {
    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      navigate("/");
      return;
    }

    navigate(`/search?query=${trimmedSearch}`);
    setResults([]);
  };

  // Clear search
  const clearSearch = () => {
    setSearch("");
    setResults([]);
    navigate("/");
  };

  return (
    <>
      {/* Overlay */}
      {results.length > 0 && (
        <div
          className="search-overlay"
          onClick={() => setResults([])}
        ></div>
      )}

      <div className="search-container" ref={searchRef}>
        <div className="search-input">
          {/* Search Icon */}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />

          {/* Input */}
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          {/* Clear Button */}
          {search && (
            <FontAwesomeIcon
              icon={faXmark}
              className="clear-icon"
              onClick={clearSearch}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        {/* Dropdown */}
        {results.length > 0 && (
          <div className="search-dropdown">
            {results.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.category}/${product.id}`}
                className="search-item"
                onClick={() => setResults([])}
              >
                {product.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}


