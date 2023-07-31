import "./Main.css";
import "../EntryForm/EntryForm";
import EntryForm from "../EntryForm/EntryForm";
import Tab from "../EntriesAndTabs/Tab";
import Date from "../EntryCard/Date";
import Entry from "../EntryCard/Entry";
import EntryE from "../EntryCard/EntryE";
import BottomSpace from "../BottomSpace/BottomSpace";

export default function Main() {
  return (
    <main>
      <EntryForm />
      <Tab />
      <Date />
      <Entry />
      <Date />
      <EntryE />
      <Date />
      <EntryE />
      <BottomSpace />
    </main>
  );
}
