export default function Input2() {
  return (
    <>
      <div className="ui-content mt15">
        <div className="popup-search-field search_area">
          <input
            type="text"
            className="form-control border-0"
            placeholder="What service are you looking for today?"
          />
          <label>
            <span className="far fa-magnifying-glass" />
          </label>
          <button className="ud-btn btn-thm" type="submit">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
