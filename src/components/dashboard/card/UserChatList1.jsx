import Image from "next/image";

export default function UserChatList1({ data }) {
  return (
    <>
      <div className="d-flex align-items-center position-relative">
        <Image
          height={50}
          width={50}
          className="img-fluid float-start rounded-circle mr10"
          src={data.img}
          alt="ms1.png"
        />
        <div className="d-sm-flex">
          <div className="d-inline-block">
            <div className="fz15 fw500 dark-color ff-heading mb-0">
              {data.name}
            </div>
            <p className="preview">{data.title}</p>
          </div>
          <div className="iul_notific">
            <small>35 mins</small>
            {data.status && <div className={`m_notif ${data.status}`}>2</div>}
          </div>
        </div>
      </div>
    </>
  );
}
