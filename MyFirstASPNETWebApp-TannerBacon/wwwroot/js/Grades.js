$("#btnSend").click(function () {

    var finalGrade;
    
    finalGrade = ($("#assignments").val() * 0.5) +
        ($("#groupproject").val() * 0.1) +
        ($("#quizzes").val() * 0.1) +
        ($("#midterm").val() * 0.1) +
        ($("#final").val() * 0.1) + 
        ($("#intex").val() * 0.1);

    $("#gradeform").append("Final grade: " + finalGrade.toString());
    //alert("Final grade: " + $("#assignments").val());
})