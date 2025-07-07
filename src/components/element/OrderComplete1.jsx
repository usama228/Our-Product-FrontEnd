export default function OrderComplete1() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="order_complete_message text-center">
                <div className="icon bgc-thm4">
                  <span className="fa fa-check text-thm" />
                </div>
                <h2 className="title">Your Order Is Completed !</h2>
                <p className="text">Thank you. Your order has been received.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="shop_order_box mt60">
                <div className="order_list_raw">
                  <ul className="d-md-flex align-items-center justify-content-md-between p-0 mb-0">
                    <li className="mb20-sm">
                      <p className="text mb5">Order Number</p>
                      <h6 className="mb-0">039422</h6>
                    </li>
                    <li className="mb20-sm">
                      <p className="text mb5">Date</p>
                      <h6 className="mb-0">27/04/2022</h6>
                    </li>
                    <li className="mb20-sm">
                      <p className="text mb5">Total</p>
                      <h6 className="mb-0">$2984.10</h6>
                    </li>
                    <li>
                      <p className="text mb5">Payment Method</p>
                      <h6 className="mb-0">Direct Bank Transfer</h6>
                    </li>
                  </ul>
                </div>
                <div className="order_details default-box-shadow1">
                  <h4 className="title mb25">Order details</h4>
                  <div className="od_content">
                    <ul className="p-0 mb-0">
                      <li className="bdrb1 mb20">
                        <h6>
                          Product
                          <span className="float-end">Subtotal</span>
                        </h6>
                      </li>
                      <li className="mb20">
                        <p className="body-color">
                          Hoodie x2
                          <span className="float-end">$59.00</span>
                        </p>
                      </li>
                      <li className="mb20">
                        <p className="body-color">
                          Seo Books x 1<span className="float-end">$67.00</span>
                        </p>
                      </li>
                      <li className=" bdrb1 mb15">
                        <h6>
                          Subtotal
                          <span className="float-end">$178.00</span>
                        </h6>
                      </li>
                      <li className=" bdrb1 mb15">
                        <h6>
                          Shipping
                          <span className="float-end">$178.00</span>
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Total
                          <span className="float-end">$9,218.00</span>
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
