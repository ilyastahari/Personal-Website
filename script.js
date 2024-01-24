function calcSalary() {
    var wage = parseFloat(document.getElementById('txt_wage').value);

    var hours = parseFloat(document.getElementById('txt_hours').value);

    var yearlySalary = wage * hours * 52;

    var salaryFeedback;

    if (yearlySalary < 20000) {
        salaryFeedback = "The salary is too little.";
    } else if (yearlySalary >= 20000 && yearlySalary <= 25000) {
        salaryFeedback = "The salary is almost enough. Let us negotiate.";
    } else {
        salaryFeedback = "This is a great salary for me.";
    }

    document.getElementById('results').innerHTML = "The yearly salary is $" + Math.round(yearlySalary) + ". " + salaryFeedback;
}
