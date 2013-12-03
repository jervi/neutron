/*global define, alert */
define(['jquery', 'chart'], function($, Chart) {
    'use strict';

    var chart;

    var createGraph = function (data) {
        var chartData;
        var context = $('#myChart').get(0).getContext('2d');
        chart = new Chart(context);

        chartData = {
            labels: data[0],
            datasets: [{
                fillColor : 'rgba(220,220,220,0.5)',
                strokeColor : 'rgba(220,220,220,1)',
                pointColor : 'rgba(220,220,220,1)',
                pointStrokeColor : '#fff',
                data : data[1]
            }]
        };
        chart.Line(chartData);
    };

    return {
        createGraph: createGraph
    };
});