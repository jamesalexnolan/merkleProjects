try {
// Select the node that will be observed for mutations
var targetNode = document.getElementById("main-content");

// Options for the observer (which mutations to observe)
var config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
var mpxExecute = function () {
  //to be excluded from experiment
  var excludedAdoptions = ["AMUR LEOPARD", "ELEPHANT", "POLAR BEAR", "SNOW LEOPARD", "TIGER"];

  //create a function that will exclude the 5 species
  var shouldNotExecute = function () {
    return Array.from(document.querySelectorAll(".item-name")).some((adoptionName) =>
      excludedAdoptions.includes(adoptionName.innerText)
    );
  };

  //if shouldNotExecute() is true, exit mpxExecute() and the below logic won't be applied
  if (shouldNotExecute()) {
    return;
  }

  var shipmentOptionLabel = document.querySelector(".rate-label");

  if (shipmentOptionLabel) {
    var labels = document.querySelectorAll(".rate-label");

    //remove express delivery
    labels.forEach((label) => {
      if (label.innerText === "Next day") {
        label.parentElement.style.display = "none";
      }
    });
  }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(mpxExecute);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
} catch (e) {}
