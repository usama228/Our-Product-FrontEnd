"use client";
import Image from "next/image";

export default function Invoice() {
  // print handler
  const printHandler = () => {
    if (typeof window !== undefined) {
      window.print();
    }
  };

  return (
    <>
      <section className="our-invoice bgc-thm4">
        <div className="container wow fadeInUp" data-wow-delay="300ms">
          <div className="row mb30">
            <div className="col-lg-12">
              <div className="float-end">
                <a
                  onClick={printHandler}
                  className="ud-btn btn-thm invoice_down_print"
                >
                  Print this invoice
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="invoice_table">
                <div className="wrapper">
                  <div className="row mb20 align-items-center">
                    <div className="col-lg-7">
                      <div className="main_logo mb30-md">
                        <Image
                          height={40}
                          width={133}
                          src="/images/header-logo-dark.svg"
                          alt="logo"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="invoice_deails">
                        <h3 className="float-start dark-color">Invoice #</h3>
                        <h5 className="float-end">0043128641</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row mt55">
                    <div className="col-sm-6 col-lg-7">
                      <div className="invoice_date mb60">
                        <div className="title mb5 ff-heading dark-color">
                          Invoice date:
                        </div>
                        <h6 className="fw500 mb0">03/10/2022</h6>
                      </div>
                      <div className="invoice_address">
                        <h4 className="mb20">Supplier</h4>
                        <h6 className="fw500">Jobio LLC</h6>
                        <p className="dark-color ff-heading">
                          2301 Ravenswood Rd Madison,
                          <br className="d-none d-lg-block" />
                          WI 53711
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-5">
                      <div className="invoice_date mb60">
                        <div className="title mb5 ff-heading dark-color">
                          Due date:
                        </div>
                        <h6 className="fw500 mb0">03/10/2022</h6>
                      </div>
                      <div className="invoice_address">
                        <h4 className="mb20">Customer</h4>
                        <h6 className="fw500">John Doe</h6>
                        <p className="dark-color ff-heading">
                          329 Queensberry Street, North Melbourne
                          <br className="d-none d-lg-block" />
                          VIC 3051, Australia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt50">
                    <div className="col-lg-12">
                      <div className="table-responsive invoice_table_list">
                        <table className="table table-borderless">
                          <thead className="thead-light">
                            <tr className="tblh_row">
                              <th className="tbleh_title" scope="col">
                                Description
                              </th>
                              <th className="tbleh_title" scope="col">
                                Price
                              </th>
                              <th className="tbleh_title" scope="col">
                                VAT (20%)
                              </th>
                              <th className="tbleh_title" scope="col">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bdrb1">
                              <th className="tbl_title" scope="row">
                                Standard Plan
                              </th>
                              <td className="tbl_title">$443.00</td>
                              <td className="tbl_title">$921.80</td>
                              <td className="tblpr_title">$9243</td>
                            </tr>
                            <tr className="bdrb1">
                              <th className="tbl_title" scope="row">
                                Extra Plan
                              </th>
                              <td className="tbl_title">$443.00</td>
                              <td className="tbl_title">$921.80</td>
                              <td className="tblpr_title">$9243</td>
                            </tr>
                            <tr>
                              <th scope="row" className="tblp_title">
                                Total Due
                              </th>
                              <td />
                              <td />
                              <td className="tblp_title">$9,750</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice_footer">
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <div className="invoice_footer_content text-center">
                        <a className="ff-heading">www.freeio.com</a>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="invoice_footer_content text-center">
                        <a className="ff-heading">invoice@freeio.com</a>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="invoice_footer_content text-center">
                        <a className="ff-heading">(123) 123-456</a>
                      </div>
                    </div>
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
