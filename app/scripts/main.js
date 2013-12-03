require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        handsontable: '../bower_components/handsontable/dist/jquery.handsontable.full',
        chart: '../bower_components/Chart.js/Chart'
    },
    shim: {
        'handsontable': {
            deps: ['jquery'],
            exports: 'hanson'
        },
        'chart': {
            exports: 'Chart'
        }
    }
});

require(['app', 'graph'], function (app, graph) {
    'use strict';
    // use app here
    app.initTable();
    app.populateData(0, 0, 5);
    graph.createGraph(app.getData());
});
