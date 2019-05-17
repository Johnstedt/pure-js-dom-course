$(document).ready(() => generateMenu(""));

let receipts = $("#primarycontent")[0];
let menu = $("#receptmeny").find(".contentarea");

myStorage = window.localStorage;

function generateMenu(txt) {

    let input = $('<input id="search-filter" />');

    $("#receptmeny").prepend(input);

    populate(txt);

    $("#search-filter").on("input", function(e) {

        populate($(this).val());
    });

}

function populate(txt) {

    menu[0].innerHTML = "</br>";

    [...receipts.children].forEach(function (receipt) {

        if(receipt.children[0].innerText.toLowerCase().includes(txt.toLowerCase())) {

            receipt.children[0].id = receipt.children[0].innerText;
            menu[0].innerHTML += "<a href='#" + receipt.children[0].innerText + "'>" + receipt.children[0].innerText + "</a></br>"

        }
    });


}