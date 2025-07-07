"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Direct 50%", "Referal 25%", "Oragnic 25%"],
    datasets: [
      {
        label: " ",
        backgroundColor: ["#5BBB7B", "#FFEDE8", "#FBF7ED"],
        data: [50, 25, 25],
        borderWidth: 4,
        hoverBorderWidth: 4,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: true,
        labels: {
          boxHeight: 16,
        },
      },
    },
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb30">
          <h5 className="title">Traffic</h5>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}
