var main = function () {
    "use strict";
    $('#avg').click(function () {
        var avgInput = $(document.avgForm);

        $.ajax({
            url: "/avg",
            dataType: 'json',
            contentType: "application/json",
            type: "POST",
            data: JSON.stringify(avgInput.serializeArray()),
            success: function (response) {
                $("#avgResult").text(response.result);
            }
        })
    });
    
    $('#max').click(function () {
        var avgInput = $(document.avgForm);

        $.ajax({
            url: "/max",
            dataType: 'json',
            contentType: "application/json",
            type: "POST",
            data: JSON.stringify(avgInput.serializeArray()),
            success: function (response) {
                $("#maxResult").text(response.result);
            }
        })
    });

    
};

$(document).ready(main);
