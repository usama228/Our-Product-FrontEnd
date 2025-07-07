export default function Input1({ lebel, placeholder }) {
  return (
    <>
      <div className="form-style1">
        <label className="form-label fw500 fz16 dark-color">{lebel}</label>
        <input type="text" className="form-control" placeholder={placeholder} />
      </div>
    </>
  );
}
