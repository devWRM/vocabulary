QUESTIONS
How to debug backend to check that information is being posted correctly to create a Word
** Rails server terminal error:    Unpermitted parameter: :student_id
** Completed 422 Unprocessable Entity in 2ms

In the wordFormSubmission function, the fetch Post for words is not working. Why?



================================================

Delete dependents by putting __ in the parent's model:

    :dependent => :destroy      -OR-        :dependent => :delete_all

================================================

Create a Word in the database with =>> rails c

Student.destroy_all
Word.destroy_all

Student.create(name: "Abraham A.", nickname: "abe", email: "abe@email.com")
Word.create(spelling: "English", pos: "adjective", definition: "a language", sentence: "I want to learn English", student_id: 1)

 Word.all[0].student.name           =>  "Abraham A."
 Student.all[0].words[0].spelling   =>  "English"





Word.create(spelling: "powerful", pos: "adjective", definition: "having or exerting force", sentence: "I am a powerful man.", student_id: 1)
 
 Word.create(spelling: "zebra", pos: "noun", definition: "an African mammal that is related to the horse", sentence: "I ride my zebra like it's a horse.", student_id: 19)

 Word.create(spelling: "exercise", pos: "verb", definition: "to put into practice", sentence: "I like to exercise everday.", student_id: 18)

 Word.create(spelling: "exercise", pos: "noun", definition: "bodily or mental exertion", sentence: "Walking is good exercise.", student_id: 17)

Word.create(spelling: "dance", pos: "verb", definition: "move your body expressively", sentence: "Will you dance with me?", student_id: 16)



================================================

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
    - Add =>> (add word button with an onclick listener) to the renderStudent method in the Student class
    - Create a showForm function to hide student related divs and call to show the form
    - Create a form function and set up event listener in it to trigger CREATE
    - Create a submission function fo fetch POST data to URL address


READ Word Steps


DELETE Word Steps

