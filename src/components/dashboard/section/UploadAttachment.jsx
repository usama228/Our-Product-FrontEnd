"use client";

import Link from "next/link";
import { useState } from "react";

export default function UploadAttachment() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // upload handler
  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);

    const isFileDuplicate = (file, fileList) => {
      return fileList.some((existingFile) => existingFile.name === file.name);
    };

    const uniqueNewFiles = newFiles.filter(
      (file) => !isFileDuplicate(file, uploadedFiles),
    );

    setUploadedFiles((prevFiles) => [...prevFiles, ...uniqueNewFiles]);
  };

  // delete handler
  const handleFileDelete = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName),
    );
  };

  // content
  let content = uploadedFiles.map((item, i) => (
    <div key={i} className="col-6 col-xl-2 position-relative">
      <div className="project-attach">
        <h6 className="title">{item.name.split(".")[0].substring(0, 15)}</h6>
        <p className="text-uppercase">{item.name.split(".").pop()}</p>
        <span className="icon flaticon-page" />
      </div>
      <button
        className="position-absolute ui-delete-btn"
        onClick={() => handleFileDelete(item.name)}
      >
        x
      </button>
    </div>
  ));

  return (
    <>
      <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Upload Attachments</h5>
        </div>
        <div className="row">
          {content}
          <div className="col-6 col-xl-3">
            <label>
              <a className="upload-img">
                Upload Files
                <input
                  type="file"
                  accept="application/pdf"
                  className="d-none"
                  onChange={handleFileUpload}
                  multiple
                />
              </a>
            </label>
          </div>
        </div>
        <p className="text">Maximum file size: 10 MB</p>
        <div className="text-start">
          <Link className="ud-btn btn-thm" href="/contact">
            Save &amp; Publish
            <i className="fal fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </>
  );
}
