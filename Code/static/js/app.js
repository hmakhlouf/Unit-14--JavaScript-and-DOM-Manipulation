
//1write code that appends a table to your web page and then adds new rows of data for each UFO sighting.





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



// 2. Use a date form in your HTML document and write JavaScript code that will
// listen for events and search through the date/time column to find rows that match user input.



// Assign the data from `data.js` to a descriptive variable
var events = data;

// Select the submit button
var filter_btn = d3.select("#filter-btn");

filter_btn.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(events);
  
  var filteredData = events.filter(event => event.datetime === inputValue);

  if (event.datetime === inputValue){
    console.log(filteredData);
  }

    
});


//// append filtered data to the same table 


var tableData = filteredData;

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