export default function Progress1() {
  return (
    <>
      <div className="ui-content">
        <h5 className="title">Progress bars</h5>
        <div className="progressbar-style1">
          <div className="progressbar-bg" />
          <div className="progressd-bar" style={{ width: "90%" }}>
            <span>90%</span>
          </div>
        </div>
        <div className="progressbar-style1 mt50">
          <div className="progressbar-bg" />
          <div className="progressd-bar" style={{ width: "50%" }}>
            <span>50%</span>
          </div>
        </div>
        <div className="progressbar-style1 mt50">
          <div className="progressbar-bg" />
          <div className="progressd-bar" style={{ width: "40%" }}>
            <span>40%</span>
          </div>
        </div>
      </div>
    </>
  );
}
