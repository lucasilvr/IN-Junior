import { useState } from "react";
import like from "../../assets/like.png";
import styles from "./styles.module.css";

interface LikeProps {
  inicioLikes?: number;
}

export default function LikeButton({ inicioLikes = 0 }: LikeProps) {
  const [likes, setLikes] = useState(inicioLikes);
  const [liked, setLiked] = useState(false);

  function click() {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  }

  return (
    <button
      className={`${styles.likeBotao} ${liked ? styles.liked : ""}`}
      onClick={click}
    >
      <img src={like} className={styles.like} />
      <span>Like • {likes}</span>
    </button>
  );
}
