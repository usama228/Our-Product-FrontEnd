export default function Radio1({ i = 0 }) {
  return (
    <>
      <div className="form-check d-flex align-items-center mb15">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id={`flexRadioDefault1${i}`}
        />
        <label className="form-check-label" htmlFor={`flexRadioDefault1${i}`}>
          Items
        </label>
      </div>
    </>
  );
}
