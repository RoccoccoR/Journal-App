/* eslint-disable react/prop-types */
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./Entry.css";
import Date from "./Date";

export default function EntryCard({ motto, notes }) {
  return (
    <section className="entryCard">
      <Date />
      <div className="mottoAndStar">
        <h3 className="entryCard-title">{motto}</h3>
        <FavoriteButton />
      </div>
      <p>{notes}</p>
    </section>
  );
}
