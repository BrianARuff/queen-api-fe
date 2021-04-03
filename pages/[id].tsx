import * as React from "react";
import { useEffect, useState } from "react";

export default function DynamicSongPage() {
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const id = location.href.split("/")[3];
    fetch("https://queen-songs.herokuapp.com/songs/" + id)
      .then((res) => res.json())
      .then((resSong) => setSong(resSong))
      .catch((err) => setError(err));
  }, []);
  return (
    <>
      {error ? (
        <p>Error loading song...</p>
      ) : !song ? (
        <p>Loading song...</p>
      ) : (
        <>
          <h2>Song Title: {song.title}</h2>
          <p>Song Author: {song.author}</p>
          <p>Song Album: {song.album}</p>
          <h3 style={{ textDecoration: "underline" }}>Lyrics</h3>
          <p>{song.lyrics}</p>
        </>
      )}
    </>
  );
}
