// Function to handle collecting data after save button has been clicked then calls the post
// to api function and passes in values

const handleAddEntry = () => {
  const creatorInput = document.querySelector("#legoCreator")
  const shapeInput = document.querySelector("#legoShape")
  const creationInput = document.querySelector("#legoCreation")
  const colorInput = document.querySelector("#legoColor")

  let legoEntry = {
      creator: creatorInput.value,
      shape: shapeInput.value,
      creation: creationInput.value,
      color: parseInt(colorInput.value)
  }
  postEntry(legoEntry)
}

let addEntryButton = document.querySelector("button", "Save Lego Creation");
addEntryButton.addEventListener("click", handleAddEntry)

