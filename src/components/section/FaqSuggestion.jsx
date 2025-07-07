export default function FaqSuggestion() {
  return (
    <>
      <div className="ui-content">
        <h4 className="title">Suggestions</h4>
        <div className="accordion-style1 faq-page mb-4 mb-lg-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item active">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="true"
                  aria-controls="collapseSix"
                >
                  What methods of payments are supported?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse show"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Can I cancel at anytime?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  How do I get a receipt for my purchase?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  Which license do I need?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  How do I get access to a theme I purchased?
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Cras vitae ac nunc orci. Purus amet tortor non at phasellus
                  ultricies hendrerit. Eget a, sit morbi nunc sit id massa.
                  Metus, scelerisque volutpat nec sit vel donec. Sagittis, id
                  volutpat erat vel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
