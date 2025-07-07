"use client";
import Image from "next/image";
import { useState } from "react";

const imgs = [
  "/images/gallery/g-1.jpg",
  "/images/gallery/g-2.jpg",
  "/images/gallery/g-3.jpg",
  "/images/gallery/g-4.jpg",
];

export default function ServiceGallery() {
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
  return (
    <>
      <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb30">
          <h5 className="list-title">Gallery</h5>
        </div>
        <div className="col-xl-9">
          <div className="d-flex mb30 flex-wrap gap-3">
            {uploadedFiles.map((item, i) => (
              <div
                key={i}
                className="gallery-item bdrs4 overflow-hidden position-relative"
              >
                <Image
                  height={119}
                  width={136}
                  className="object-fit-cover"
                  src={URL.createObjectURL(item)}
                  style={{ height: "166px", width: " 190px" }}
                  alt="gallery"
                />
                <div className="del-edit">
                  <div className="d-flex justify-content-center">
                    <a className="icon me-2">
                      <span className="flaticon-pencil" />
                    </a>
                    <a
                      className="icon"
                      onClick={() => handleFileDelete(item.name)}
                    >
                      <span className="flaticon-delete" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="gallery-item bdrs4 overflow-hidden">
              <label>
                <a>
                  <Image
                    height={119}
                    width={136}
                    className="w-100 h-auto"
                    src="/images/gallery/g-1.png"
                    alt="gallery"
                  />
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="d-none"
                    onChange={handleFileUpload}
                    multiple
                  />
                </a>
              </label>
            </div>
          </div>
          <p className="text">
            Max file size is 1MB, Minimum dimension: 330x300 And Suitable files
            are .jpg &amp; .png
          </p>
          <a className="ud-btn btn-thm mt-2">
            Save
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
}
