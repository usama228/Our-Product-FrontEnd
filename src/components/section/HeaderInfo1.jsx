export default function HeaderInfo1({ title, brief }) {
  return (
    <>
      <section className="pt40 pb0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title">
                <h2 className="title">{title}</h2>
                <p className="text mb-0">{brief}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
