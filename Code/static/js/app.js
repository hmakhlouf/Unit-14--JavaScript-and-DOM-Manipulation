// from data.js
var tableData = data;

// reference the table
var tbody = d3.select("tbody")

// update the value of each cell with pplsReport values (date/time, city, state, country, shape, and comment)



// Loop Through `data` and console.log each of the ppls Report   
data.forEach(function(pplsReport){
    console.log(pplsReport);
    // append row for every sigle ppls report 
    var row = tbody.append("tr");
    //   console.log each value in ppls Report data by using  `Object.entries` 
    Object.entries(pplsReport).forEach(function([key, value]){
        console.log(key, value);
        // Append a cell to the row for each value in pplsReport object 
        var cell = row.append("td");
        cell.text(value);
    });
});


