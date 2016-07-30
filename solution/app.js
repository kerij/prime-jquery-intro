
$(document).ready(function() {
    var array = [];
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      //console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // append to DOM
      appendDom(values);

      //show the monhtly total on the webpage
      $("#total").text("Monthly Total: $" + monthlyCompanyTotal);
    });


var employeeArray =[];
var monthlyCompanyTotal = 0

    function appendDom(empInfo) {
      var monthlySalary = 0

      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();



      //put employee objects in an array
      employeeArray.push(empInfo);
      console.log(employeeArray);

      //calculate monthlySalary and save in a variable
      //console.log(employeeArray[employeeArray.length - 1]["employeesalary"]);
      monthlySalary = parseFloat(employeeArray[employeeArray.length - 1]["employeesalary"])/12;
      monthlySalary = parseFloat(monthlySalary.toFixed(2));
      //console.log(monthlySalary);

      //put monthlySalary in the object
      employeeArray[employeeArray.length - 1].monthlySalary = monthlySalary;

      //add new monthlySalary to the running total
      monthlyCompanyTotal += ParseFloat(monthlySalary.toFixed(2));

      //Drews crazyness
      // employeeArray[employeeArray.length] = empInfo;
      // console.log(employeeArray);
      //----------------
      $el.append('<p>Employee Entry: ' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + ' ' + empInfo.employeejobtitle + ' ' + empInfo.employeesalary + ' ' + empInfo.monthlySalary + '</p>');
    }


});
