// Check off specific todos by clicking
$("li").on("click", function () {
    $(this).toggleClass("completed");
})

// Click on X to delete Todo
$("span").on("click", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type=text]").keypress(function (event) {
    if (event.which === 13) {
        // Grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to li
        $("ul").append("<li>" + todoText + "</li>");
    }
})
