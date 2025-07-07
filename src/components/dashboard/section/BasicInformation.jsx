"use client";

import { useState } from "react";
import SelectInput from "../option/SelectInput";
import Link from "next/link";

export default function BasicInformation() {
  const [getCategory, setCategory] = useState({
    option: "Select",
    value: "select",
  });
  const [getEngLevel, setEngLevel] = useState({
    option: "Select",
    value: "select",
  });
  const [getResTime, setResTime] = useState({
    option: "Select",
    value: "select",
  });
  const [getDeliveryTime, setDeliveryTime] = useState({
    option: "Select",
    value: "select",
  });
  const [getSkill, setSkill] = useState({
    option: "Nothing selected",
    value: null,
  });
  const [getCountry, setCountry] = useState({
    option: "United States",
    value: "usa",
  });
  const [getCity, setCity] = useState({
    option: "New York",
    value: "new-york",
  });

  // handlers
  const categoryHandler = (option, value) => {
    setCategory({
      option,
      value,
    });
  };
  const engLevelHandler = (option, value) => {
    setEngLevel({
      option,
      value,
    });
  };
  const resTimeHandler = (option, value) => {
    setResTime({
      option,
      value,
    });
  };
  const deliveryTimeHandler = (option, value) => {
    setDeliveryTime({
      option,
      value,
    });
  };
  const skillHandler = (option, value) => {
    setSkill({
      option,
      value,
    });
  };
  const countryHandler = (option, value) => {
    setCountry({ option, value });
  };
  const cityHandler = (option, value) => {
    setCity({ option, value });
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Basic Information</h5>
        </div>
        <div className="col-xl-8">
          <form className="form-style1">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Service Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="i will"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Price
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="$10"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Category"
                    defaultSelect={getCategory}
                    handler={categoryHandler}
                    data={[
                      {
                        option: "Select",
                        value: "select",
                      },
                      {
                        option: "Graphics & Design",
                        value: "graphics-design",
                      },
                      {
                        option: "Digital Marketing",
                        value: "digital-marketing",
                      },
                      {
                        option: "Writing & Translation",
                        value: "writing-translation",
                      },
                      {
                        option: "Video & Animation",
                        value: "video-animation",
                      },
                      {
                        option: "Music & Audio",
                        value: "music-audio",
                      },
                      {
                        option: "Programming & Tech",
                        value: "programming-tech",
                      },
                      {
                        option: "Business",
                        value: "business",
                      },
                      {
                        option: "Lifestyle",
                        value: "lifestyle",
                      },
                      {
                        option: "Trending",
                        value: "trending",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="English Level"
                    defaultSelect={getEngLevel}
                    handler={engLevelHandler}
                    data={[
                      {
                        option: "Select",
                        value: "select",
                      },
                      {
                        option: "Fluent",
                        value: "fluent",
                      },
                      {
                        option: "Mid Level",
                        value: "mid-level",
                      },
                      {
                        option: "Conversational",
                        value: "conversational",
                      },
                      {
                        option: "Other",
                        value: "other",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Response Time"
                    defaultSelect={getResTime}
                    handler={resTimeHandler}
                    data={[
                      {
                        option: "Select",
                        value: "select",
                      },
                      {
                        option: "Response Time One",
                        value: "response-time-one",
                      },
                      {
                        option: "Response Time Two",
                        value: "response-time-two",
                      },
                      {
                        option: "Response Time Three",
                        value: "response-time-three",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Delivery Time"
                    defaultSelect={getDeliveryTime}
                    handler={deliveryTimeHandler}
                    data={[
                      {
                        option: "Select",
                        value: "select",
                      },
                      {
                        option: "Delivery Time One",
                        value: "delivery-time-one",
                      },
                      {
                        option: "Delivery Time Two",
                        value: "delivery-time-two",
                      },
                      {
                        option: "Delivery Time Three",
                        value: "delivery-time-three",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb20">
                  <SelectInput
                    label="Skills"
                    defaultSelect={getSkill}
                    handler={skillHandler}
                    data={[
                      {
                        option: "Select",
                        value: "select",
                      },
                      {
                        option: "Figma",
                        value: "figma",
                      },
                      {
                        option: "Adobe XD",
                        value: "adobe-xd",
                      },
                      {
                        option: "CSS",
                        value: "css",
                      },
                      {
                        option: "HTML",
                        value: "html",
                      },
                      {
                        option: "Bootstrap",
                        value: "bootstrap",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="Country"
                    defaultSelect={getCountry}
                    data={[
                      {
                        option: "United States",
                        value: "usa",
                      },
                      {
                        option: "Canada",
                        value: "canada",
                      },
                      {
                        option: "United Kingdom",
                        value: "uk",
                      },
                      {
                        option: "Australia",
                        value: "australia",
                      },
                      {
                        option: "Germany",
                        value: "germany",
                      },
                      { option: "Japan", value: "japan" },
                    ]}
                    handler={countryHandler}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    label="City"
                    defaultSelect={getCity}
                    data={[
                      {
                        option: "New York",
                        value: "new-york",
                      },
                      {
                        option: "Toronto",
                        value: "toronto",
                      },
                      {
                        option: "London",
                        value: "london",
                      },
                      {
                        option: "Sydney",
                        value: "sydney",
                      },
                      {
                        option: "Berlin",
                        value: "berlin",
                      },
                      { option: "Tokyo", value: "tokyo" },
                    ]}
                    handler={cityHandler}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb10">
                  <label className="heading-color ff-heading fw500 mb10">
                    Services Detail
                  </label>
                  <textarea cols={30} rows={6} placeholder="Description" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-start">
                  <Link className="ud-btn btn-thm" href="/contact">
                    Save
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
