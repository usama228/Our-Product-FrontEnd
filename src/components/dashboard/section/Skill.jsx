"use client";
import { useState } from "react";
import SelectInput from "../option/SelectInput";
import Link from "next/link";

export default function Skill() {
  const [getSkill, setSkill] = useState({
    option: "Designer",
    value: null,
  });
  const [getPoint, setPoint] = useState({
    option: "80",
    value: null,
  });
  const [getSkill2, setSkill2] = useState({
    option: "Developer",
    value: null,
  });
  const [getPoint2, setPoint2] = useState({
    option: "70",
    value: null,
  });
  const [getSkill3, setSkill3] = useState({
    option: "Video Editor",
    value: null,
  });
  const [getPoint3, setPoint3] = useState({
    option: "75",
    value: null,
  });

  // handlers
  const skillHandler = (option, value) => {
    setSkill({ option, value });
  };
  const pointHandler = (option, value) => {
    setPoint({ option, value });
  };
  const skillHandler2 = (option, value) => {
    setSkill2({ option, value });
  };
  const pointHandler2 = (option, value) => {
    setPoint2({ option, value });
  };
  const skillHandler3 = (option, value) => {
    setSkill3({ option, value });
  };
  const pointHandler3 = (option, value) => {
    setPoint3({ option, value });
  };
  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Skills</h5>
        </div>
        <div className="col-lg-7">
          <div className="row">
            <form className="form-style1">
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb20">
                    <SelectInput
                      label="Skills 1"
                      defaultSelect={getSkill}
                      data={[
                        {
                          option: "Designer",
                          value: "designer",
                        },
                        {
                          option: "UI/UX",
                          value: "ui-ux",
                        },
                      ]}
                      handler={skillHandler}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb20">
                    <SelectInput
                      label="Point"
                      defaultSelect={getPoint}
                      data={[
                        {
                          option: "80",
                          value: "80",
                        },
                        {
                          option: "90",
                          value: "90",
                        },
                      ]}
                      handler={pointHandler}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb20">
                    <SelectInput
                      label="Skills 2"
                      defaultSelect={getSkill2}
                      data={[
                        {
                          option: "Developer",
                          value: "developer",
                        },
                        {
                          option: "Programmer",
                          value: "programmer",
                        },
                      ]}
                      handler={skillHandler2}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb20">
                    <SelectInput
                      label="Point"
                      defaultSelect={getPoint2}
                      data={[
                        {
                          option: "70",
                          value: "70",
                        },
                        {
                          option: "80",
                          value: "80",
                        },
                      ]}
                      handler={pointHandler2}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb20">
                    <SelectInput
                      label="Skills 3"
                      defaultSelect={getSkill3}
                      data={[
                        {
                          option: "Video Editor",
                          value: "video-editor",
                        },
                        {
                          option: "Programmer",
                          value: "programmer",
                        },
                      ]}
                      handler={skillHandler3}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb20">
                    <SelectInput
                      label="Point"
                      defaultSelect={getPoint3}
                      data={[
                        {
                          option: "75",
                          value: "75",
                        },
                        {
                          option: "80",
                          value: "80",
                        },
                      ]}
                      handler={pointHandler3}
                    />
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
      </div>
    </>
  );
}
