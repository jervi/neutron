require.config({
    paths: {
        d3: '../bower_components/d3'
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
    console.log(app);
});
