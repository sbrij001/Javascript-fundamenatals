// Takes in two arguments 
// Students score & total possible score 
// Generate the letter grade + percentage the student received
// 15 / 20 => you got a C(75%)!

let generateStudentScore = function(studentScore, totalPossScore){
  let percentage = (studentScore / totalPossScore) * 100;
  let letterGrade = '';

  if(percentage >= 90){
    letterGrade = 'A';
  }else if(percentage >= 80){
    letterGrade = 'B';
  }else if(percentage >= 70){
    letterGrade = 'C';
  }else if(percentage >= 60){
    letterGrade = 'D';
  }else {
    letterGrade = 'F';
  }

  console.log(`You got an ${letterGrade} (${percentage}%)`);
};


generateStudentScore(15,20);