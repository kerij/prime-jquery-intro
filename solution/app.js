
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

      //highlight a <p> when clicked - only works on every other entry with toggleClass????
      $(".employee").on("click",function() {
        $(this).addClass("highlight");
      });

      //delete button
      $("#delete").on("click", function(){
        $(".highlight").remove();
      });

    });


var employeeArray =[];
var monthlyCompanyTotal = 0;
// function changeBackgroundColor(){
//   $(this).toggleClass("highlight");
//   }


    function appendDom(empInfo) {
      var monthlySalary = 0

      $('#employeetable').append('<div class="person"></div>');
      var $el = $('#employeetable').last();



      //put employee objects in an array
      employeeArray.push(empInfo);
      console.log(employeeArray);

      //calculate monthlySalary and save in a variable
      monthlySalary = parseFloat(employeeArray[employeeArray.length - 1]["employeesalary"])/12;
      monthlySalary = parseFloat(monthlySalary.toFixed(2));


      //put monthlySalary in the object
      employeeArray[employeeArray.length - 1].monthlySalary = monthlySalary;

      //add new monthlySalary to the running total
      monthlyCompanyTotal += parseFloat(monthlySalary.toFixed(2));

      //Drews crazyness
      // employeeArray[employeeArray.length] = empInfo;
      // console.log(employeeArray);
      //----------------
      $el.append('<tr class="employee"><td>' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + '</td><td>' + empInfo.employeenumber + '</td><td>' +empInfo.employeejobtitle + '</td><td>' + empInfo.employeesalary + '</td><td>' + empInfo.monthlySalary + '</td></tr>');
    }


});
