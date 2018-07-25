
    var object = new XMLHttpRequest();
    object.open('GET', 'data/service.json', true);

    object.send();

    object.onload = function() {

        var data = JSON.parse(object.responseText);
        var table = "";

        table += "<table id='table'>";
        table += "<tr><td>" + data.service.bike1 + "</td>" + "<td>" + data.service.job1 + "</td>"
            + "<td>" + data.service.price5 + "</td></tr>";

        table += "<tr><td>" + data.service.bike2 + "</td>" + "<td>" + data.service.job1 + "</td>"
            + "<td>" + data.service.price5 + "</td></tr>";

        table += "<tr><td>" + data.service.bike3 + "</td>" + "<td>" + data.service.job1 + "</td>"
            + "<td>" + data.service.price5 + "</td></tr>";

        table += "<tr><td>" + data.service.bike1 + "</td>" + "<td>" + data.service.job2 + "</td>"
            + "<td>" + data.service.price1 + "</td></tr>";

        table += "<tr><td>" + data.service.bike2 + "</td>" + "<td>" + data.service.job2 + "</td>"
            + "<td>" + data.service.price1 + "</td></tr>";

        table += "<tr><td>" + data.service.bike3 + "</td>" + "<td>" + data.service.job2 + "</td>"
            + "<td>" + data.service.price4 + "</td></tr>";

        table += "<tr><td>" + data.service.bike1 + "</td>" + "<td>" + data.service.job3 + "</td>"
            + "<td>" + data.service.price3 + "</td></tr>";

        table += "<tr><td>" + data.service.bike2 + "</td>" + "<td>" + data.service.job3 + "</td>"
            + "<td>" + data.service.price4 + "</td></tr>";

        table += "<tr><td>" + data.service.bike3 + "</td>" + "<td>" + data.service.job3 + "</td>"
            + "<td>" + data.service.price5 + "</td></tr>";

        table += "</table>";
        document.getElementById("pstable").innerHTML = table;

    }
