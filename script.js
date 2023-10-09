// Define a function to generate a unique task ID
function generateTaskId() {
    // Generate a random unique identifier (you can use a library for this)
    // For simplicity, we'll use a timestamp here as an example
    const timestamp = new Date().getTime();
    return `task-${timestamp}`;
  }

$(document).ready(function() {
    // Add Task
    $("#task-form").submit(function(e) {
      e.preventDefault();
      const taskText = $("#task").val();
      if (taskText !== "") {
        const listItem = $("<li>")
          .addClass("list-group-item d-flex justify-content-between align-items-center")
          .data("task-id", generateTaskId()) // Set a data attribute 'task-id'
          .append(
            $("<label>")
              .addClass("custom-control custom-checkbox")
              .append(
                $("<input>")
                  .attr("type", "checkbox")
                  .addClass("custom-control-input")
              )
              .append(
                $("<span>")
                  .addClass("custom-control-indicator")
              )
              .append(
                $("<span>")
                  .addClass("custom-control-label")
                  .text(taskText)
              )
          )
          .append(
            $("<button>")
              .addClass("btn btn-danger btn-sm delete")
              .text("Remove Task")
          );
        $("#task-list").append(listItem);
        $("#task").val("");
      }
    });
    
    // Remove Task
$("#task-list").on("click", ".delete", function() {
    const listItem = $(this).closest("li");
    listItem.addClass("shrink-animation"); // Add the class to trigger the animation
    setTimeout(function() {
      listItem.remove(); // Remove the task item after the animation completes
    }, 300); // Adjust the time based on your animation duration
  });
  
  
    // Checkbox Animation
    $("#task-list").on("change", "input[type='checkbox']", function() {
      const listItem = $(this).closest("li");
      if (this.checked) {
        listItem.addClass("task-done");
      } else {
        listItem.removeClass("task-done");
      }
    });
  });
  