$("#btnSend").click(function () {

    var finalGrade;
    var letterGrade = 'A';

    // This calculated the final grade percentage based on the weights in the syllabus
    finalGrade = ($("#assignments").val() * 0.5) +
        ($("#groupproject").val() * 0.1) +
        ($("#quizzes").val() * 0.1) +
        ($("#midterm").val() * 0.1) +
        ($("#final").val() * 0.1) + 
        ($("#intex").val() * 0.1);

    // This will define a letter grade and grade color (greeen, yellow, or red) based on 
    // the final grade percentage
    if (finalGrade >= 94) {
        letterGrade = 'A';
        $("#finalgrade").attr("class", "bg-success text-white");
    } else if (finalGrade >= 90) {
        letterGrade = 'A-';
        $("#finalgrade").attr("class","bg-success text-white");
    } else if (finalGrade >= 87) {
        letterGrade = 'B+';
        $("#finalgrade").attr("class","bg-success text-white");
    } else if (finalGrade >= 84) {
        letterGrade = 'B';
        $("#finalgrade").attr("class","bg-warning text-white");
    } else if (finalGrade >= 80) {
        letterGrade = 'B-';
        $("#finalgrade").attr("class","bg-warning text-white");
    } else if (finalGrade >= 77) {
        letterGrade = 'C+';
        $("#finalgrade").attr("class","bg-warning text-white");
    } else if (finalGrade >= 74) {
        letterGrade = 'C';
        $("#finalgrade").attr("class","bg-danger text-white");
    } else if (finalGrade >= 70) {
        letterGrade = 'C-';
        $("#finalgrade").attr("class","bg-danger text-white");
    } else if (finalGrade >= 67) {
        letterGrade = 'D+';
        $("#finalgrade").attr("class","bg-danger text-white");
    } else if (finalGrade >= 64) {
        letterGrade = 'D';
        $("#finalgrade").attr("class","bg-danger text-white");
    } else if (finalGrade >= 60) {
        letterGrade = 'D-';
        $("#finalgrade").attr("class","bg-danger text-white");
    } else {
        letterGrade = 'E';
        $("#finalgrade").attr("class","bg-danger text-white");
    }


    // This will use jquery to select and update the text for the final grade class
    $("#finalgrade").text("Final Grade: " + finalGrade.toString() + "% " + letterGrade);

    // These are some other options for implementing the final grade I explored

    //$("#gradeform").append("Final grade: " + finalGrade.toString());
    //alert("Final grade: " + $("#assignments").val());
})