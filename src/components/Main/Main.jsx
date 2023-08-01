import "./Main.css";
import "../EntryForm/EntryForm";
import EntryForm from "../EntryForm/EntryForm";
import Tab from "../EntriesAndTabs/Tab";
// import Date from "../EntryCard/Date";
// import Entry from "../EntryCard/Entry";
// import EntryE from "../EntryCard/EntryE";
import BottomSpace from "../BottomSpace/BottomSpace";
import EntriesSection from "../EntriesSection/EntriesSection";

export default function Main() {
  return (
    <main>
      <EntryForm />
      <Tab />
      <EntriesSection />
      {/* <Date />
      <Entry />
      <Date />
      <EntryE />
      <Date />
      <EntryE /> */}
      <BottomSpace />
    </main>
  );
}
