// IIFE
    // Immeditely Invocable Function Expression

    const sum = function() {
        console.log(5 + 12);
    }();

    (function() {
        console.log("started");
    }())