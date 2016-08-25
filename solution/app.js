
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
      $("empfirstname").focus();

      // append to DOM
      appendDom(values);

      //show the monhtly total on the webpage
      $("#total").text(monthlyCompanyTotal);

      //highlight a <p> when clicked - only works on every other entry with toggleClass????
      // $(".employee").on("click",function() {
      //   $(this).addClass("highlight");
      // });

      //delete button (form)
      // $("#delete").on("click", function(){
      //   $(".highlight").remove();
      // });
      //delete botton (row)
      $(".person").on("click", ".delete", function(){
        console.log(this);
        console.log($(this).data("testing"));
        monthlyCompanyTotal -= $(this).data("testing");
        $(this).parent().remove();
        $("#total").text(monthlyCompanyTotal);
      });

    });


});

var employeeArray =[];
var monthlyCompanyTotal = 0;



    function appendDom(empInfo) {
      var monthlySalary = 0

      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();



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
      $el.append('<p class="employee">' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + '</p>')
      $el.append('<p>' + empInfo.employeenumber + '</p>')
      $el.append('<p>' + empInfo.employeejobtitle + '<p>')
      $el.append('<p>' + empInfo.employeesalary + '</p>')
      $el.append('<p>' + empInfo.monthlySalary + '</p>')
      $el.append('<button class="delete" data-testing="' + empInfo.monthlySalary + '">Delete</button>');
    }
