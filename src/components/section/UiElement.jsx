"use client";
import { useState } from "react";
import Accordion1 from "../ui-elements/Accordion1";
import Alert1 from "../ui-elements/Alert1";
import Buttons1 from "../ui-elements/Buttons1";
import Tab1 from "../ui-elements/Tab1";
import Tab2 from "../ui-elements/Tab2";
import Table1 from "../ui-elements/Table1";
import Input1 from "../ui-elements/inputes/Input1";
import Option1 from "../ui-elements/options/Option1";
import Option2 from "../ui-elements/options/Option2";
import TextArea1 from "../ui-elements/textareas/TextArea1";
import Radio1 from "../ui-elements/radios/Radio1";
import CheckBox1 from "../ui-elements/checkboxs/CheckBox1";
import Switch1 from "../ui-elements/switches/Switch1";
import BudgetOption2 from "../option/BudgetOption2";
import Tooltop1 from "../ui-elements/tooltips/Tooltop1";
import Progress1 from "../ui-elements/progress/Progress1";
import HeroSearch1 from "../element/HeroSearch1";
import Input2 from "../ui-elements/inputes/Input2";

const options = [
  "Banking",
  "Digital & Creative",
  "Retail",
  "Designer",
  "Developer",
];

export default function UiElement() {
  const [option1, setOption1] = useState("Search");
  const [option2, setOption2] = useState([]);

  // option handler 1
  const optionHandler1 = (data) => {
    setOption1(data);
  };

  // option handler 2
  const optionHandler2 = (data) => {
    if (!option2.includes(data)) {
      return setOption2((prev) => [...prev, data]);
    }
    setOption2(option2.filter((item) => item !== data));
  };

  return (
    <>
      <section className="pb-0 pb50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title mb-3">UI Elements</h2>
                <p className="text">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt0 pb90 our-ui-elements">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Accordion1 />
            </div>
            <div className="col-lg-6">
              <Tab1 />
              <Tab2 />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Table1 />
            </div>
            <div className="col-lg-6">
              <Alert1 />
            </div>
          </div>
          <div className="row">
            <Buttons1 />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ui-content mt10">
                <h5 className="title">Form</h5>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="ui-content mb40">
                <Input1 lebel="Input" placeholder="Your Name" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1">
              <div className="ui-content mb40">
                <Input1 lebel="Input Focus" placeholder="Your Name" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="ui-content mb40">
                <Option1
                  lebel="Search Select boxes, Hover"
                  data={options}
                  selected={option1}
                  handler={optionHandler1}
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1">
              <div className="ui-content mb40">
                <Option2
                  lebel="Search Select boxes, Hover"
                  data={options}
                  selected={option2}
                  handler={optionHandler2}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-xl-5">
              <TextArea1 />
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1">
              <div className="row">
                <div className="col-auto">
                  <div className="ui-content">
                    <h5 className="title fz15 mb20 mt50">Radiobox</h5>
                    <div className="radiobox-style1">
                      <div className="radio-element">
                        {Array(4)
                          .fill(4)
                          .map((_, i) => (
                            <Radio1 key={i} i={i} />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="ui-content">
                    <h5 className="title fz15 mb20 mt50">Checkbox</h5>
                    <div className="checkbox-style1">
                      {Array(4)
                        .fill(4)
                        .map((_, i) => (
                          <CheckBox1 key={i} />
                        ))}
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="ui-content">
                    <h5 className="title fz15 mb20 mt50">Switch</h5>
                    {Array(2)
                      .fill(2)
                      .map((_, i) => (
                        <Switch1 key={i} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Tooltop1 />
            </div>
            <div className="col-lg-6">
              <Progress1 />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ui-content">
                <h5 className="title">Range Slider</h5>
                <div className="range-slider-style1 mb-4 mb-lg-5">
                  <BudgetOption2 />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="ui-content">
                <h5 className="title">Typography</h5>
                <h5 className="mb20">
                  Bringing the culture of sharing to everyone
                </h5>
                <p className="mb25 ff-heading text">
                  Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan
                  nec. Quisque bibendum orci ac nibh facilisis, at malesuada
                  orci congue. Nullam tempus sollicitudin cursus. Ut et
                  adipiscing erat. Curabitur this is a text link libero tempus
                  congue.
                </p>
                <p className="ff-heading text mb60">
                  Duis mattis laoreet neque, et ornare neque sollicitudin at.
                  Proin sagittis dolor sed mi elementum pretium. Donec et justo
                  ante. Vivamus egestas sodales est, eu rhoncus urna semper eu.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Integer tristique elit lobortis purus
                  bibendum, quis dictum metus mattis. Phasellus posuere felis
                  sed eros porttitor mattis. Curabitur massa magna, tempor in
                  blandit id, porta in ligula. Aliquam laoreet nisl massa, at
                  interdum mauris sollicitudin et.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blockquote-style1 mb-4 mb-lg-5">
                <blockquote className="blockquote">
                  <p className="fst-italic fz15 fw500 ff-heading dark-color">
                    Aliquam hendrerit sollicitudin purus, quis rutrum mi
                    accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                    malesuada orci congue.
                  </p>
                  <h6 className="quote-title">Luis Pickford</h6>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="ui-content mt15">
                <h5 className="title">What you'll learn</h5>
              </div>
              <div className="row">
                <div className="col-auto">
                  <div className="ui-content">
                    <div className="list-style1">
                      <ul>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Become a UI/UX designer.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          You will be able to start earning money Figma skills.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Build a UI project from beginning to end.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Work with colors &amp; fonts.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          You will create your own UI Kit.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="ui-content">
                    <div className="list-style1">
                      <ul>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Build &amp; test a complete mobile app.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Learn to design mobile apps &amp; websites.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Design 3 different logos.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Create low-fidelity wireframe.
                        </li>
                        <li>
                          <i className="far fa-check text-thm3 bgc-thm3-light" />
                          Downloadable exercise files.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="advance-search-field position-relative bdr1">
                    <HeroSearch1 />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <Input2 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
