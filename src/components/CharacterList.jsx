import React, { useState, useEffect } from "react";
import Character from "./Character";
import ReactLoading from "react-loading";

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {page}</p>
      <div>
        { page>1 ? <button
          onClick={() => setPage(page - 1)}
          className="btn btn-primary btn-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>  Page {page }
        </button> : ''}
        {' '}
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-primary btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>  Page {page + 1}
        </button>
      </div>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacter] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      console.log(data.results);
      setloading(false);
      setCharacter(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="grid row align-items-md-stretch">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <div className="container">
          <ReactLoading
            type={"spin"}
            color={"#DC3545"}
            height={"35%"}
            width={"35%"}
          />
        </div>
      ) : (
        characters.map((character) => {
          return (
            <div className="col-md-6 p-2" key={character.id}>
              <Character character={character} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default CharacterList;
