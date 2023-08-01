import "./EntryE.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function EntryE() {
  return (
    <section className="entryCard">
      <div className="mottoAndStar">
        <h3 className="entryCard-title">
          &ldquo;That&rsquo;s is life in the city&ldquo;
        </h3>
        <FavoriteButton />
      </div>
      <p>
        Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
        mihi. Et quidem se repellere, idque instituit docere sic omne animal,
        simul atque.
      </p>
      <hr />
    </section>
  );
}
