
// // // I - write code that appends a table to your web page and then adds new rows of data for each UFO sighting.



// from data.js
var tableData = data;

// reference the table
var tbody = d3.select("tbody")

// update the value of each cell with pplsReport values (date/time, city, state, country, shape, and comment)



// Loop Through `data` and console.log each of the ppls Report   
tableData.forEach(function(pplsReport){
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



// // II - Use the  form in index.html and write the adequate js code to 
// //  search through the datetime column and find rows that match user input.



// // Assign the data from `data.js` to a descriptive variable
var events = data;


// Select the submit button
var submit = d3.select("#filter-btn");  //

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value"); //**value */

  console.log(inputValue);
  console.log(events);

  var filteredData = events.filter(events => 
    events.datetime === inputValue
  );

  
  if (events.datetime === inputValue){
    console.log(filteredData);

  } // end of if statement 
  
  else {
    
    console.log(data);

  } // end of else Statement 


//////////////////////////
//append filtered data 
/////////////////////////

 // from data.js
 var tableData = filteredData;

 // reference the table & clear table content to append filtered Data 
 var tbody = d3.select("tbody")
 tbody.html("")
 
 // Loop Through `filtredData` and console.log each of the filteredReport   
 filteredData.forEach(function(FilteredReport){
   
     console.log(FilteredReport);
     // append row for every sigle filteredReport 
     var row = tbody.append("tr");
     //   console.log each value in filteredReport data by using  `Object.entries` 
     Object.entries(FilteredReport).forEach(function([key, value]){
         console.log(key, value);
         // Append a cell to the row for each value in FilteredReport object 
         var cell = row.append("td");
         cell.text(value);
     });
 });
 
});


