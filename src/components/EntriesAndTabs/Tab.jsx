import AllEntriesTitle from "./AllEntriesTitle";
import AllEntriesFavourites from "./AllEntriesFavourites";
import "./Tab.css";

export default function Tab() {
  return (
    <div className="main-tab">
      <AllEntriesTitle />
      <AllEntriesFavourites />
    </div>
  );
}
