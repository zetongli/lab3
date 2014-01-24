'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
	$('.jumbotron h1').text("Try it");
	$("#testjs").text("Just changed");


	$(".jumbotron p").toggleClass("active");

	});

	
	$("#submitBtn").click(updateProject);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

  $(".project").append("<div class='project-description'><p>Description of the project.</p></div>");
  var descriptions = $(".project-description");
  descriptions.addClass("displayToggle");



	// $(".jumbotron p").addClass("active");
}

// function updateProject(e) {
//    var projectID = $('#project').val();

//    $(projectID).animate({
//       width: $('#width').val()
//    });

//    var newText = $('#description').val();
//    $(projectID + " .project-description").text(newText);
// }


function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}



// function projectClick(e) { 
    
//     console.log("Project clicked");

//     // prevent the page from reloading      
//     e.preventDefault();
//     // In an event handler, $(this) refers to      
//     // the object that triggered the event      
//     $(this).css("background-color", "#7fff00");
// }

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    
	console.log("Project clicked");
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    console.log("projectTitle" + projectTitle);


    var jumbotronHeader = $(".jumbotron h1"); // wrong selector
    console.log("jumbotronHeader" + jumbotronHeader);
    
    jumbotronHeader.text(projectTitle);


	  var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");

    $(description).toggleClass("displayToggle");







    // if (description.length == 0) {
    // // $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");

    // 	 $(description).fadeIn();

    // } else {
    //    // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       

    //       $(description).fadeOut("slow",function(){
    //       $(description).remove();
    //    });
    // }







}