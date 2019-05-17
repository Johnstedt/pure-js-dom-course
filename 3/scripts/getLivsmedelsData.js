// Cache
let table = $("#search-table");
let search = $("#search-word");
let button = $("#sok-button");
let tbody = table.children()[1];

table.hide();

button.click(function () {
    $.ajax("https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php", {
        dataType: 'jsonp',
        method: "GET",
        data: { namn: search.val() },
        success: populateTable
    })
});

function populateTable(array){

    if(array.livsmedel.length === 0){
        table.hide();
        return
    }
    table.show();

    tbody.innerHTML = "";

    array.livsmedel.forEach(function (element) {
        tbody.innerHTML +=
            "<tr>" +
                "<td>" + element.namn + "</td>" +
                "<td>" + element.energi + "</td>" +
                "<td>" + element.kolhydrater + "</td>" +
                "<td>" + element.protein + "</td>" +
                "<td>" + element.fett + "</td>" +
            "</tr>"
    })
}