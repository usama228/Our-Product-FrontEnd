"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const dropdownData = ["This Week", "This Month", "This Year"];

export default function LineChart() {
  const [getSelected, setSelected] = useState(0);

  const d = {
    0: [148, 140, 210, 120, 160, 120, 190, 170, 135, 210, 180, 249],
    1: [140, 148, 120, 210, 140, 160, 140, 190, 210, 135, 249, 180],
    2: [170, 190, 210, 135, 249, 180, 140, 148, 120, 210, 140, 160],
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Marc",
      "April",
      "May",
      "June",
      "July",
      "Agust",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Dataset",
        backgroundColor: "rgba(251, 247, 237, 0.9)",
        borderColor: "#5BBB7B",
        data: d[getSelected],
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 300,
      },
    },
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="navtab-style1">
          <div className="d-sm-flex align-items-center justify-content-between">
            <h4 className="title fz17 mb20">Profile Views</h4>
            <div className="page_control_shorting dark-color pr10 text-center text-md-end">
              <div className="dropdown bootstrap-select show-tick">
                <button
                  type="button"
                  className="btn dropdown-toggle btn-light"
                  data-bs-toggle="dropdown"
                >
                  <div className="filter-option">
                    <div className="filter-option-inner">
                      <div className="filter-option-inner-inner">
                        {dropdownData[getSelected]}
                      </div>
                    </div>
                  </div>
                </button>
                <div className="dropdown-menu">
                  <div className="inner show">
                    <ul className="dropdown-menu inner show">
                      {dropdownData.map((item, i) => (
                        <li
                          key={i}
                          className={getSelected === i ? "selected active" : ""}
                        >
                          <a
                            onClick={() => setSelected(i)}
                            className={`dropdown-item ${
                              getSelected === i ? "selected active" : ""
                            }`}
                          >
                            <span className="bs-ok-default check-mark" />
                            <span className="text">{item}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}
