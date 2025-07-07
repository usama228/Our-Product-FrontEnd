import Image from "next/image";

export default function MessageBox() {
  return (
    <>
      <div className="message_container mt30-md">
        <div className="user_heading px-0 mx30">
          <div className="wrap">
            <Image
              height={50}
              width={50}
              className="img-fluid mr10"
              src="/images/inbox/ms3.png"
              alt="ms3.png"
            />
            <div className="meta d-sm-flex justify-content-sm-between align-items-center">
              <div className="authors">
                <h6 className="name mb-0">Arlene McCoy</h6>
                <p className="preview">Active</p>
              </div>
              <div>
                <a className="text-decoration-underline fz14 fw500 text-red ff-heading">
                  Delete Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="inbox_chatting_box">
          <ul className="chatting_content">
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms4.png"
                  alt="ms4.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>
                How likely are you to recommend our company to your friends and
                family?
              </p>
            </li>
            <li className="reply float-end">
              <div className="d-flex align-items-center justify-content-end mb15">
                <div className="title fz15">
                  <small className="mr10">35 mins</small> You
                </div>
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-end ml10"
                  src="/images/inbox/ms5.png"
                  alt="ms5.png"
                />
              </div>
              <p>
                Hey there, we’re just writing to let you know that you’ve been
                subscribed to a repository on GitHub.
              </p>
            </li>
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms5.png"
                  alt="ms5.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>Ok, Understood!</p>
            </li>
            <li className="reply float-end">
              <div className="d-flex align-items-center justify-content-end mb15">
                <div className="title fz15">
                  <small className="mr10">35 mins</small> You
                </div>
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-end ml10"
                  src="/images/inbox/ms5.png"
                  alt="ms5.png"
                />
              </div>
              <p>The project finally complete! Let's go to!.</p>
            </li>
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms2.png"
                  alt="ms2.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>Let's go!</p>
            </li>
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms2.png"
                  alt="ms2.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </li>
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms2.png"
                  alt="ms2.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>Hello, John!</p>
            </li>
            <li className="reply float-end">
              <div className="d-flex align-items-center justify-content-end mb15">
                <div className="title fz15">
                  <small className="mr10">35 mins</small> You
                </div>
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-end ml10"
                  src="/images/inbox/ms3.png"
                  alt="ms3.png"
                />
              </div>
              <p>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </li>
            <li className="reply float-end">
              <div className="d-flex align-items-center justify-content-end mb15">
                <div className="title fz15">
                  <small className="mr10">35 mins</small> You
                </div>
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-end ml10"
                  src="/images/inbox/ms3.png"
                  alt="ms3.png"
                />
              </div>
              <p>Are we meeting today?</p>
            </li>
            <li className="reply float-end">
              <div className="d-flex align-items-center justify-content-end mb15">
                <div className="title fz15">
                  <small className="mr10">35 mins</small> You
                </div>
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-end ml10"
                  src="/images/inbox/ms3.png"
                  alt="ms3.png"
                />
              </div>
              <p>The project finally complete! Let's go to!</p>
            </li>
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms2.png"
                  alt="ms2.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>Let's go!</p>
            </li>
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms2.png"
                  alt="ms2.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </li>
            <li className="reply float-end">
              <div className="d-flex align-items-center justify-content-end mb15">
                <div className="title fz15">
                  <small className="mr10">35 mins</small> You
                </div>
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-end ml10"
                  src="/images/inbox/ms3.png"
                  alt="ms3.png"
                />
              </div>
              <p>Are we meeting today?</p>
            </li>
            <li className="reply float-end">
              <div className="d-flex align-items-center justify-content-end mb15">
                <div className="title fz15">
                  <small className="mr10">35 mins</small> You
                </div>
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-end ml10"
                  src="/images/inbox/ms3.png"
                  alt="ms3.png"
                />
              </div>
              <p>The project finally complete! Let's go to!</p>
            </li>
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms2.png"
                  alt="ms2.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>Let's go!</p>
            </li>
            <li className="sent float-start">
              <div className="d-flex align-items-center mb15">
                <Image
                  height={50}
                  width={50}
                  className="img-fluid rounded-circle align-self-start mr10"
                  src="/images/inbox/ms2.png"
                  alt="ms2.png"
                />
                <div className="title fz15">
                  Albert Flores <small className="ml10">35 mins</small>
                </div>
              </div>
              <p>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's
              </p>
            </li>
          </ul>
        </div>
        <div className="mi_text">
          <div className="message_input">
            <form className="d-flex align-items-center">
              <input
                className="form-control"
                type="search"
                placeholder="Type a Message"
              />
              <button type="button" className="btn ud-btn btn-thm">
                Send Message
                <i className="fal fa-arrow-right-long" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
