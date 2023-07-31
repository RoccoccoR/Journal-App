import AllEntriesTitle from "./AllEntriesTitle";
import AllEntriesFavourites from "./AllEntriesFavourites";
import "./Tab.css";

export default function Tab() {
  return (
    <section className="main-tab">
      <AllEntriesTitle />
      <AllEntriesFavourites />
    </section>
  );
}
