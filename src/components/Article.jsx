import React from "react";

function getMinutesToReadDisplay(minutesToRead) {
  if (typeof minutesToRead !== "number") return null;

  if (minutesToRead < 30) {
    const cups = Math.ceil(minutesToRead / 5);
    return `${repeat(cups)} ${minutesToRead} min read`;
  }

  const boxes = Math.ceil(minutesToRead / 10);
  return `${repeat(boxes)} ${minutesToRead} min read`;
}

function Article({ title, date = "December 15, 2020", preview, minutesToRead }) {
  const minutesDisplay = getMinutesToReadDisplay(minutesToRead);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutesDisplay && <p>{minutesDisplay}</p>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;