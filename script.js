$(document).ready(function() {
    // Add Task
    $("#task-form").submit(function(e) {
      e.preventDefault();
      const taskText = $("#task").val();
      if (taskText !== "") {
        const listItem = $("<li>")
          .addClass("list-group-item d-flex justify-content-between align-items-center")
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
      $(this).closest("li").remove();
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
  