
/*
document.getElementById("btnSend").addEventListener("click", function () {
    alert("From: " + document.getElementById("txtFrom").value +
        ", Subject: " + document.getElementById("txtSubject") +
        ", Message: " + document.getElementById("txtMessage"));
})
*/

$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val()
    );
})