import React from "react";
import comments from "../data/cards-data.json";
import style from "./styles/Cards.module.css";
import Card from "./Card.js";

// TODO Need to fix the size of the cards and the layout
export default function Cards() {
  return (
    <div className={style.container}>
      <div className={style.cards_container}>
        {comments.map((comment, i) => (
          <Card key={i} data={{ ...comment }} />
        ))}
      </div>
    </div>
  );
}
