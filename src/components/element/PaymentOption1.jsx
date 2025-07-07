export default function PaymentOption1() {
  return (
    <>
      <div className="payment_widget default-box-shadow1">
        <h4 className="title">Payment</h4>
        <div className="radio-element">
          <div className="form-check d-flex align-items-center mb15">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked="checked"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Direct bank transfer
            </label>
          </div>
          <div className="pw-details">
            <p className="fz13 mb30">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference.Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="form-check d-flex align-items-center mb15">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Check payments
            </label>
          </div>
          <div className="form-check d-flex align-items-center mb15">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Cash on delivery
            </label>
          </div>
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              PayPal
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
