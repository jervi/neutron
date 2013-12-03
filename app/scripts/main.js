require.config({
    paths: {
        d3: '../bower_components/d3/d3',
        jquery: '../bower_components/jquery/jquery',
        handsontable: '../bower_components/handsontable/dist/jquery.handsontable.full'
    },
    shim: {
        'handsontable': {
            deps: ['jquery'],
            exports: 'hanson'
        }
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    app.initTable();
    app.populateData(0, 0, 5);
});
