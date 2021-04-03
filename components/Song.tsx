import * as React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "../styles/Song.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Song({ song }) {
  return (
    <Link href={`/${song.id}`}>
      <Grid
        className={styles.song}
        item={true}
        key={song.id}
        xs={12}
        md={6}
        lg={4}
        component={motion.article}
        animate={{ opacity: [0, 1], x: ["-100vw", "0vw"] }}
        whileHover={{
          cursor: "pointer",
          borderColor: "#ffb703",
          borderWidth: "5px",
          borderStyle: "dashed",
        }}
        transition={{ duration: 0.3 }}
        style={{ margin: "20px 0" }}
      >
        <h4>{song.title}</h4>
        <p className={styles.lighterFont}>-- {song.album}</p>
        <p>{song.lyrics.slice(0, 300)}.....</p>
      </Grid>
    </Link>
  );
}
