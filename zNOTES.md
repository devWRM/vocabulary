

[[ TOGGLE to Show & Hide ]]
LEARNCO =>>     jsdom-toy-tale-onl01-seng-ft-081720

let addToy = false;

addBtn.addEventListener("click", () => {
    // peek-a-boo form: repeatedly re-assign addToy to true then false

    addToy = !addToy;
    if (addToy) {
      // TRUE Reveals underlying form with "block"
      toyFormContainer.style.display = "block";
    } else {
      // FALSE Conceals underlying form with "none"
      toyFormContainer.style.display = "none";
    }

  });






========================




READ Student Steps
    - Add a students-container <div> to append list of students to
    - Set up event listener to trigger READ (in DOMContentLoaded or another called function)
    - Create fetch function (auto GET) data from a URL address
    - Reassemble the returned data
    - Create instance(s) with the returned data
    - Call an instance render method on (each) instance to display instance(s)


CREATE Student Steps
    - Add a student-form <div> to append create new student form to
    - Create a form function and set up event listener in it to trigger CREATE
    - Create a submission function to fetch POST data to URL address
    - Reassemble returned data
    - Create an instance with the returned data
    - Call an instance render method on the instance to display it


DELETE Student Steps
    - Add a delete button with an onclick listener to the renderStudent method in the Student class
    - Create deleteStudent function that uses event to drill down to the dataset id of the specific student =>> event.target.dataset.id
    - Change dataset id to a number =>> parseInt(event.target.dataset.id)
    - Use the dataset id number in the fetch URL address =>> method: "DELETE"
    - Instantly display result with:    this.location.reload()

====================================

CREATE Word Steps
    - Add an add word button with an onclick listener to the renderStudent method in the Student class
    - Create a form function and set up event listener in it to trigger CREATE
    - Create a submission function fo fetch POST data to URL address


READ Word Steps


DELETE Word Steps

