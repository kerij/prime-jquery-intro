var myApp = angular.module("myApp", []);

myApp.controller("taskController", ["$scope", function($scope) {
  console.log("task controller working!");
  $scope.employees = [];
  $scope.salaryTotal = {total: 0};

  $scope.addEmployee = function () {
    var onePerson = angular.copy($scope.employee);
    onePerson.monthlySalary = onePerson.salary/12;
    $scope.salaryTotal.total += onePerson.monthlySalary;
    $scope.employees.push(onePerson);
    $scope.employee = {};
  }

  $scope.removeEmployee = function (index) {
    console.log($scope.employees[index].monthlySalary);
    var oneSalary = $scope.employees[index].monthlySalary;
    $scope.salaryTotal.total -= oneSalary;
    $scope.employees.splice(index, 1);
  }
}]);
//---------------------------------------------------------------------------------------------------------------//

// $(document).ready(function() {
//     var array = [];
//     $('#employeeinfo').on('submit', function(event) {
//       event.preventDefault();
//
//       // initialize a new variable as an empty object
//       var values = {};
//
//       // convert the form inputs into an array
//       var fields = $('#employeeinfo').serializeArray();
//
//       // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
//       fields.forEach(function(element, index, array) {
//         // review index notation vs. dot notation on objects
//         // here, dot notation wouldn't work
//         values[element.name] = element.value;
//       });
//
//       //console.log(values);
//
//       // clear out inputs
//       $('#employeeinfo').find('input[type=text]').val('');
//
//       // append to DOM
//       appendDom(values);
//
//       //show the monhtly total on the webpage
//       $("#total").text("Monthly Total: $" + monthlyCompanyTotal);
//
//       //highlight a <p> when clicked - only works on every other entry with toggleClass????
//       // $(".employee").on("click",function() {
//       //   $(this).addClass("highlight");
//       // });
//
//       //delete button (form)
//       // $("#delete").on("click", function(){
//       //   $(".highlight").remove();
//       // });
//
//       //delete botton (row)
//       $(".delete").on("click", function(){
//         $(this).parent().parent().remove();
//         console.log(this);
//         console.log($(this).data("testing"));
//         monthlyCompanyTotal -= $(this).data("testing");
//         $("#total").text("Monthly Total: $" + monthlyCompanyTotal);
//       });
//
//     });
//
//
// var employeeArray =[];
// var monthlyCompanyTotal = 0;
//
//
//
//     function appendDom(empInfo) {
//       var monthlySalary = 0
//
//       $('#employeetable').append('<div class="person"></div>');
//       var $el = $('#employeetable').last();
//
//
//
//       //put employee objects in an array
//       employeeArray.push(empInfo);
//       console.log(employeeArray);
//
//       //calculate monthlySalary and save in a variable
//       monthlySalary = parseFloat(employeeArray[employeeArray.length - 1]["employeesalary"])/12;
//       monthlySalary = parseFloat(monthlySalary.toFixed(2));
//
//
//       //put monthlySalary in the object
//       employeeArray[employeeArray.length - 1].monthlySalary = monthlySalary;
//
//       //add new monthlySalary to the running total
//       monthlyCompanyTotal += parseFloat(monthlySalary.toFixed(2));
//
//       //Drews crazyness
//       // employeeArray[employeeArray.length] = empInfo;
//       // console.log(employeeArray);
//       //----------------
//       $el.append('<tr class="employee"><td>' + empInfo.employeefirstname + ' ' + empInfo.employeelastname + '</td><td>' + empInfo.employeenumber + '</td><td>' +empInfo.employeejobtitle + '</td><td>' + empInfo.employeesalary + '</td><td>' + empInfo.monthlySalary + '</td><td><button class="delete" data-testing="' + empInfo.monthlySalary + '">Delete</button></td></tr>');
//     }
//
//
// });
