// Ugly af, add to markup instead. Assume here as intro to modify DOM and to avoid to grade multiple files?
document.getElementById("content").innerHTML +=
    "<input type='button' class='btn btn-primary' id='calculate' value='calculate'/>";

// Add column to table
document.getElementsByClassName("thead-dark")[0].children[0].innerHTML +=
    "<th>Summa</th>";

// Add summation row
document.getElementById("pricetable").children[1].innerHTML +=
    " <tr>\n" +
        "<td>Summation</td>\n" +
        "<td> - </td>\n" +
        "<td> - </td>\n" +
        "<td> - </td>\n" +
        "<td> - </td>\n" +
        "<td> - </td>\n" +
    "</tr>";

// Calculates sum of each product.
document.getElementById("calculate").addEventListener("click",(()=>{

    let items = 0;
    let total = 0;

    [...document.getElementById("pricetable").children[1].children].forEach((row, i, arr)=>{
        if (i === arr.length - 1){
            return;
        }
            row.children[5] ?
            row.children[5].innerHTML = "<td>"+row.children[3].innerHTML*row.children[4].children[0].value+"</td>"
            :
            row.innerHTML += "<td>"+row.children[3].innerHTML*row.children[4].children[0].value+"</td>"

        total += parseInt(row.children[3].innerHTML)* parseInt(row.children[4].children[0].value);
        items += parseInt(row.children[4].children[0].value);
    });


    let table = document.getElementById("pricetable").children[1].children
    table[table.length-1].innerHTML =
        " <tr>\n" +
            "<td>Summation</td>\n" +
            "<td> - </td>\n" +
            "<td> - </td>\n" +
            "<td> - </td>\n" +
            "<td>"+items+"</td>\n" +
            "<td>"+total+"</td>\n" +
        "</tr>";
}));