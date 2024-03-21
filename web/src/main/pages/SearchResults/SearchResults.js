import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchResults.module.css";
import Card from "../../../shared/UI/Card";
import { EVENTS } from "../StandupComedy/DUMMY_DATA";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    // Filter events based on the search query
    const filteredEvents = EVENTS.filter((event) =>
      event.title.toLowerCase().includes(searchQuery?.toLowerCase())
    );
    setSearchResults(filteredEvents);
  }, [searchQuery]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Search Results for: {searchQuery}</h2>
      {searchResults.length > 0 ? (
        searchResults.map((event) => (
          <Card
            key={event.id}
            id={event.id}
            image={event.image}
            title={event.title}
            text={event.text}
            date={event.date}
            location={event.location}
            className={styles["limited-rows"]}
          />
        ))
      ) : (
        <p className={styles["no-matches-found"]}>No events found</p>
      )}
    </div>
  );
};

export default SearchResults;
