import useSongs from "./customHooks/useSongs";
import Song from "./components/Song";
import Grid from "@material-ui/core/Grid";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const { songs, error } = useSongs();
  return (
    <Grid className={styles.container} container direction="row" wrap="wrap">
      {error ? (
        <h4>Error Loading Songs...</h4>
      ) : !songs ? (
        <h4>Loading Songs...</h4>
      ) : (
        songs.map((song) => <Song song={song} />)
      )}
    </Grid>
  );
};

export default HomePage;
