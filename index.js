"use strict"
$(document).ready ( () => {
    // //create an array of the slide images
    // let imageCache = [];
    // $("#gallery img").each( (index, img) => {
    //     const image = new Image();
    //     image.src = $(img).attr("src");
    //     image.title = $(img).attr("alt");
    //     imageCache[index] = image;
    // });

    $("#gallery img").on('click', (evt) => {
        let description = $(this).alt
        $("#project-description").html(description);
        console.log(evt)
        
    })

})