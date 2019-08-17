// Create the processes table & verify the cell
// correspond to the process group and knowledge
// area required 
// (x and y is the answer given by the user)
function verify(x, y) {
    var indexChar = $("#random").val();
    var index = parseInt(indexChar);
    var names = [
       "Create Project Charter",
       "Develop Project Management Plan",
       "Manage and Direct Project Work",
       "Monitor and Control Project Work",
       "Perform Integrated Change Control",
       "Close Project or Phase",
       "Plan Scope Management",
       "Collect Requirements",
       "Define Scope",
       "Create WBS",
       "Validate Scope",
       "Control Scope",
       "Plan Schedule Management",
       "Define Activities",
       "Sequence Activities",
       "Estimate Activity Resources",
       "Estimate Activity Durations",
       "Develop Schedule",
       "Control Schedule",
       "Plan Cost Management",
       "Estimate Costs",
       "Determine Budget",
       "Control Costs",
       "Plan Quality Management",
       "Perform Quality Assurance",
       "Control Quality",
       "Plan Human Resource Management",
       "Acquire Project Team",
       "Develop Project Team",
       "Manage Project Team",
       "Plan Communications Management",
       "Manage Communications",
       "Control Communications",
       "Plan Risk Management",
       "Identify Risks",
       "Perform Qualitative Risk Analysis",
       "Perform Quantitative Risk Analysis",
       "Plan Risk Responses",
       "Control Risks",
       "Plan Procure Management",
       "Conduct Procurements",
       "Control Procurements",
       "Close Procurements",
       "Identify Stakeholders",
       "Plan Stakeholders Management",
       "Manage Stakeholder Engagement",
       "Control Stakeholder Engagement"
    ];
    var know = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
    5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9];
    var proc = [0, 1, 2, 3, 3, 4, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 2, 3,
    1, 2, 2, 2, 1, 2, 3, 1, 1, 1, 1, 1, 3, 1, 2, 3, 4, 0, 1, 2, 3];
    var inputName = "#in" + x + y; 
    if (x === know[index] & y === proc[index]) {
        alert("Perfect...Now, solve for the next process");
        var index = Math.floor((Math.random() * 46) + 1);
        $(inputName).attr("checked", false);
        $("#processID").val(names[index]);
        $("#random").val(index);
    } else {
        alert("Sorry! Try again");
        $(inputName).attr("checked",false);
    }
    
}




 



  