import { useEffect, useState } from "react";

type ISongs = {
  id: number;
  title: string;
  lyrics: string;
  album: string;
}[];

type IError = {
  error: { message: string };
};

export default function useSongs() {
  const [songs, setSongs] = useState<ISongs | null>(null);
  const [error, setError] = useState<IError | null>(null);
  useEffect(() => {
    fetch("https://queen-songs.herokuapp.com/songs")
      .then((res) => res.json())
      .then((songs) => {
        setSongs(songs);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return {
    songs,
    error,
  };
}
