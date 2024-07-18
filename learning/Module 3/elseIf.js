//90-100 --> A
//70-89 --> B
//60-69 --> c
//Below 59 --> F


var studentScore = 64;

if(studentScore >= 90) {
    console.log('Student got A');
}

else if(studentScore >= 70 && studentScore <= 89) {
    console.log('student got B');
}

else if(studentScore >= 60 && studentScore <= 69 ) {
    console.log("student got C");
}

else {
    console.log('sudent got F');
}