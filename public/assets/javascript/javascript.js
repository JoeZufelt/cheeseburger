$(function () {
    $(".change-devoured").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        var newDevoured = {
            devoured: newDevoured
        };

        // PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed devoured to", devoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("a new burger has entered the fight");
                location.reload();
            }
        );
    });

    // DELETE!
    $(".delete-burger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});