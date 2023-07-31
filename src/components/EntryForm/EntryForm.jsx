import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form action="" className="entry-form">
      <h1>NEW ENTRY</h1>
      <div className="entry-form__input">
        <label htmlFor="Motto">Motto</label>
        <input type="text" id="Motto" />
      </div>
      <div className="entry-form__input">
        <label htmlFor="Notes">Notes</label>
        <textarea name="" id="Notes" cols="30" rows="5"></textarea>
      </div>
      <button className="entry-form__button">Create</button>
    </form>
  );
}
