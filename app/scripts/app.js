/*global define */
define(['jquery', 'handsontable'], function () {
    'use strict';

    var data = [
            ['', 'Kia', 'Nissan', 'Toyota', 'Honda'],
            ['2008', 10, 11, 12, 13],
            ['2009', 20, 11, 14, 13],
            ['2010', 30, 15, 12, 13]
        ],
        table;

    var initTable = function() {
        $('#dataTable').handsontable({
            //data: data,
            startRows: 6,
            startCols: 8,
            colHeaders: true,
            rowHeaders: true
        });
        table = $('#dataTable').handsontable('getInstance');
    };

    var populateData = function(x, y, e) {
        table.setDataAtCell(x, y, e);
    };

    var getData = function() {
        if (table) {
            return table.getData();
        }
    };

    return {
        initTable: initTable,
        populateData: populateData,
        getData: getData
    };
});