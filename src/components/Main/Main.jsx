import "./Main.css";
import "../EntryForm/EntryForm";
import EntryForm from "../EntryForm/EntryForm";
import Tab from "../EntriesAndTabs/Tab";
import BottomSpace from "../BottomSpace/BottomSpace";
import EntriesSection from "../EntriesSection/EntriesSection";

export default function Main() {
  return (
    <main>
      <EntryForm />
      <Tab />
      <EntriesSection />
      <BottomSpace />
    </main>
  );
}
