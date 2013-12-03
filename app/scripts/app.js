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

    var calculateSize = function() {
        var doc = $(document);
        var width = doc.width();
        var height = doc.height();
        console.log(height);
        var colWidth = 50;
        var colHeight = 23;
        return {
            colWidth: colWidth,
            colHeight: colHeight,
            width: width,
            height: height,
            cols: Math.floor(width / colWidth),
            rows: Math.floor(height / colHeight)
        };
    };

    var setSize = function(table) {
        var size = calculateSize();

        table.updateSettings({
            startRows: (size.rows - 1),
            startCols: (size.cols - 1)
            /*width: size.width,
            height: size.height*/
        });
    };

    var initTable = function() {
        var size = calculateSize();
        console.log(size);
        $('#dataTable').handsontable({
            //data: data,
            startCols: size.cols,
            startRows: size.rows,
            width: size.width,
            height: size.height,
            colHeaders: true,
            rowHeaders: true,
        });
        table = $('#dataTable').handsontable('getInstance');

        $(window).resize(function() {
            setSize(table);
        });
    };

    var populateData = function(x, y, e) {
        table.setDataAtCell(x, y, e);
    };

    return {
        initTable: initTable,
        populateData: populateData
    };
});