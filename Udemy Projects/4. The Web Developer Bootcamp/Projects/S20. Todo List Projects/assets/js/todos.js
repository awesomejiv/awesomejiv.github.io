//var modal = document.getElementById("myModal");
//var btn = document.getElementById("fa-plus");
//var span = document.getElementsByClassName("close")[0];

//span.onclick = function(){
//    modal.style.display = "none";
//}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

// Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").keypress(function (event) {
    if (event.which === 13) {
        // Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to li
        $("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(".modal").css("display", "none");
    }
});

$(".fa-plus").click(function(){
//    $("input[type='text']").slideToggle();
    $(".modal").css("display", "block");
});

$(".close").click(function(){
    $(".modal").css("display", "none");
})