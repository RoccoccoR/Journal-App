import "./Main.css";
import "../EntryForm/EntryForm";
import EntryForm from "../EntryForm/EntryForm";
import Tab from "../EntriesAndTabs/Tab";

export default function Main() {
  return (
    <main>
      <EntryForm />
      <Tab />
    </main>
  );
}
