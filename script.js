
function calculateGrade() {
  
    var score = parseInt(document.getElementById('score').value);

    var grade;
    if (score >= 95) {
        grade = 'With Highest Honor';
    } else if (score >= 90) {
        grade = 'With Honor';
    } else if (score >= 80) {
        grade = 'Passed';
    } else if (score >= 75) {
        grade = 'Passed';
    } else if (score >= 60) {
        grade = 'Failed';
    } else if (score >= 50) {
        grade = 'Failed'
    }

  
    document.getElementById('result').innerText = 'Your grade is: ' + grade;
}


document.getElementById('calculateButton').addEventListener('click', calculateGrade);
