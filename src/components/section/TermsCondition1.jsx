"use client";

import { useState } from "react";

const tab = [
  "Account & Payments",
  "Manage Orders",
  "Returns & Refunds",
  "COVID-19",
  "Other",
];

export default function TermsCondition1() {
  const [currentTab, setCurrentTab] = useState("Other");

  return (
    <>
      <section className="our-terms">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title">
                <h2>Terms and Conditions</h2>
                <p className="text">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-2">
              <div className="terms_condition_widget mb30-sm">
                <div className="widget_list">
                  <nav>
                    <div className="nav nav-tabs text-start">
                      {tab.map((item, i) => (
                        <button
                          onClick={() => setCurrentTab(item)}
                          key={i}
                          className={`nav-link text-start ${
                            currentTab == item ? "active" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-9 col-xl-9 offset-xl-1">
              <div className="terms_condition_grid text-start">
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      tab.indexOf(currentTab) === 4 ? "show active" : ""
                    }`}
                  >
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">1. Introduction</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.{" "}
                      </p>
                    </div>
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">2. Your Use of the Freeio Sites</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                    <div className="grids">
                      <h4 className="title">3. Content and Ideas</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tab.indexOf(currentTab) === 3 ? "show active" : ""
                    }`}
                  >
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">1. Introduction</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.{" "}
                      </p>
                    </div>
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">2. Your Use of the Freeio Sites</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                    <div className="grids">
                      <h4 className="title">3. Content and Ideas</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tab.indexOf(currentTab) === 2 ? "show active" : ""
                    }`}
                  >
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">1. Introduction</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.{" "}
                      </p>
                    </div>
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">2. Your Use of the Freeio Sites</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                    <div className="grids">
                      <h4 className="title">3. Content and Ideas</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tab.indexOf(currentTab) === 1 ? "show active" : ""
                    }`}
                  >
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">1. Introduction</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.{" "}
                      </p>
                    </div>
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">2. Your Use of the Freeio Sites</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                    <div className="grids">
                      <h4 className="title">3. Content and Ideas</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tab.indexOf(currentTab) === 0 ? "show active" : ""
                    }`}
                  >
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">1. Introduction</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.{" "}
                      </p>
                    </div>
                    <div className="grids mb90 mb40-md">
                      <h4 className="title">2. Your Use of the Freeio Sites</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt morbi
                        egestas dignissim eget id aliquam.
                      </p>
                    </div>
                    <div className="grids">
                      <h4 className="title">3. Content and Ideas</h4>
                      <p className="mb25 text fz15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus nascetur morbi nisl, mi, in semper metus porttitor
                        non. Augue nunc amet fringilla sit. Fringilla eget arcu
                        sodales sed a, parturient fermentum amet scelerisque.
                        Amet purus urna, dictumst aliquet aliquam natoque non,
                        morbi pretium. Integer amet fermentum nibh viverra
                        mollis consectetur arcu, ultrices dolor. Gravida purus
                        arcu viverra eget. Aliquet tincidunt dignissim aliquam
                        tempor nec id. Habitant suscipit sit semper duis odio
                        amet, at.
                      </p>
                      <p className="text fz15">
                        Massa ultricies a arcu velit eget gravida purus ultrices
                        eget. Orci, fames eu facilisi justo. Lacus netus a at
                        sed justo vel leo leo pellentesque. Nulla ut laoreet
                        luctus cum turpis et amet ac viverra. Vitae neque orci
                        dui eu ac tincidunt. Egestas placerat egestas netus nec
                        velit gravida consectetur laoreet vitae. Velit sed enim
                        habitant habitant non diam. Semper tellus turpis tempus
                        ac leo tempor. Ultricies amet, habitasse adipiscing
                        bibendum consequat amet, sed. Id convallis suspendisse
                        vitae, lacinia mattis cursus montes, dui. Tortor
                        lobortis dignissim eget egestas. Eget enim auctor nunc
                        eget mattis sollicitudin senectus diam. Tincidunt mor{" "}
                      </p>
                      <section className="our-terms">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="main-title">
                                <h2>Terms and Conditions</h2>
                                <p className="text">
                                  Give your visitor a smooth online experience
                                  with a solid UX design
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      bi egestas dignissim eget id aliquam.
                      <p />
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
