import React from "react";
import RaceChart from "../chart/raceChart";
import BasicChart from "../chart/basicChart";
import LineChart from "../chart/lineChart";
import DonutChart from "../chart/donutChart";

function Statistical() {
  return (
    <center>
      <DonutChart></DonutChart>
      <LineChart></LineChart>
      <BasicChart></BasicChart>
      <RaceChart></RaceChart>
    </center>
  );
}

export default Statistical;