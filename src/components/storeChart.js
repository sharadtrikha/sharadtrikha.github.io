import React, { useContext, useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { AppContext } from '../app.context';
import { Fruits } from '../data/fruits';


var series;
var label;
export const StoreChart = (props) => {

    useEffect(() => {
        /**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

/**
 * The XYChart for transit schema
 */


// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.padding(0, 0, 0, 0);

// Title
var title = chart.tooltipContainer.createChild(am4core.Label);
title.text = `Store  - ${props.selectedStore}`;
title.fill = am4core.color("#00254b");
title.fontSize = 25;
//title.width = am4core.percent(100);
//title.textAlign = "middle";
title.x = 10;
title.y = 10;

function createAxis(list) {
  var axis = list.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  axis.strictMinMax = true;
  axis.renderer.grid.template.disabled = true;
  axis.renderer.labels.template.disabled = true;
  axis.renderer.baseGrid.disabled = true;
}

// Create axes
createAxis(chart.xAxes);
createAxis(chart.yAxes);

function createLine(name, color, data) {
  // Create series
  series = chart.series.push(new am4charts.StepLineSeries());
  series.data = data;
  series.name = name;

  // Set up binding to data
  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  // Set up appearance
  series.stroke = color;
  series.strokeWidth = 4;
  series.connect = false;
  //series.tensionX = 0.5;
  //series.tensionY = 0.5;

  // Set up dash
  series.propertyFields.strokeDasharray = "dash";

  // Add bullets (stations)
//   var bullet = series.bullets.push(new am4charts.CircleBullet());
  
//   bullet.circle.radius = 6;
//   bullet.circle.fill = am4core.color("#fff");
//   bullet.circle.stroke = am4core.color("#000");
//   bullet.circle.strokeWidth = 2;
//   bullet.circle.tooltipText = "{station}";
let bullet = series.bullets.push(new am4charts.Bullet());
let image = bullet.createChild(am4core.Image);
image.adapter.add("href", (href, target)=>{
    let category = target.dataItem.dataContext.img;
    
    return category;
  })
image.width = 15;
image.height = 15;
image.horizontalCenter = "middle";
image.verticalCenter = "middle";

}

function createConnector(data) {
  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.data = data;
  series.hiddenInLegend = true;

  // Set up binding to data
  series.dataFields.valueX = "x";
  series.dataFields.valueY = "y";

  // Set up appearance
  series.stroke = am4core.color("#999");
  series.strokeWidth = 12;
  series.connect = false;

  // Add bullets (stations)
  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 6;
  bullet.circle.fill = am4core.color("#fff");
  bullet.circle.stroke = am4core.color("#000");
  bullet.circle.strokeWidth = 2;

  bullet.zIndex = -10;

}

const fruits = [{
    station: "Tai Wai",
    x: 36,
    y: 45
  }, {
    station: "Che Kung Temple",
    x: 50,
    y: 47
  }, {
    station: "Che Kung Temple1",
    x: 50,
    y: 52
  },{
    station: "Che Kung Temple123",
    x: 50,
    y: 60
  }].map((elem, i) => { elem.img = Fruits[i].img; return elem });


createLine(
  "Ma On Shan Line",
  am4core.color("#97401d"),
  fruits
);






/**
 * The map for background
 */

var bg = chart.plotContainer.createChild(am4core.Image);
bg.width = am4core.percent(100);
bg.height = am4core.percent(100);
bg.href = "https://www.theblackfriday.com/images/walmart-storemap.jpg";


series.events.on("ready", function () {



    let bullet = series.bullets.push(new am4charts.Bullet());
let image = bullet.createChild(am4core.Image);

    // label = series.createChild(am4core.Image);
    // label.width = "20";
    // label.height = "20";
    // label.href = Fruits[0].img;

     label = series.createChild(am4core.Label);
     label.strokeOpacity = 0;
     label.fontSize = 20;
    label.fill = series.stroke;
     label.fillOpacity = 1;
     label.padding(0, 0, 5, 0);

    label.path = series.segments.getIndex(0).strokeSprite.path;

    series.segments.getIndex(0).strokeSprite.events.on("propertychanged", function (event) {
        if (event.property == "path") {
            label.path = series.segments.getIndex(0).strokeSprite.path;
        }
    })
    animateForward();

}, 1000)


function animateForward() {
    label.text = '🧍';
    var animation = label.animate({ property: "locationOnPath", from: 0, to: 1 }, 12000);
    animation.events.on("animationended", animateBackwards);
}

function animateBackwards() {
    // label.text = "And I can go backwards!"
    var animation = label.animate({ property: "locationOnPath", from: 1, to: 0 }, 8000);
    animation.events.on("animationended", animateForward);
}
    }, []);


    return (
        <div style={{height: '55vh'}} id="chartdiv"></div>
    )
}