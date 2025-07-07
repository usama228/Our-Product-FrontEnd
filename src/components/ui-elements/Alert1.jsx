export default function Alert1() {
  return (
    <>
      <div className="ui-content">
        <h5 className="title">Message Boxes</h5>
        <div className="message-alart-style1">
          <div
            className="alert alart_style_one alert-dismissible fade show mb20"
            role="alert"
          >
            Info: User pending action
            <i
              className="far fa-xmark btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
          <div
            className="alert alart_style_two alert-dismissible fade show mb20"
            role="alert"
          >
            Warning: User has to be admin
            <i
              className="far fa-xmark btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
          <div
            className="alert alart_style_three alert-dismissible fade show mb20"
            role="alert"
          >
            Error: Internal Server Error
            <i
              className="far fa-xmark btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
          <div
            className="alert alart_style_four alert-dismissible fade show mb20"
            role="alert"
          >
            Success: Updated members status
            <i
              className="far fa-xmark btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>
        </div>
      </div>
    </>
  );
}
