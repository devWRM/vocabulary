

LINES 220 - 253 commented out



QUESTIONS

Q ]]
git add .       <<= is NOT working, WHY?


Q ]]
How do I refactor to empty out my index.js file?


Q ]]
Can you do more than one fetch in a function ??

Q ]]
Include student's name with their list of words
ANSWER: You need to be in the class folder to have access to the student's name
        And then from there, call a method that's in another class to render

Q ]]
Invisible folder on my Mac




FETCH errors Catch
Increment like counter and start it at zero ( 0 )

Folders: src    bin     styles






___________________________________________________
       NOTE Open Office Hours   10a  12n  3p
                NOTE 2 separate times, refreshing window does not clear a console log, I had to re-open the html file in the browser to clear the log





Q ]]
How do I force an error in order to use .catch()
ANSWER  Miss-spell a strong params attribute at the bottom of appropriate Controller
    15:45   JS/Rails Project Build: PART 4 — OOJS Refactor
        https://www.youtube.com/watch?v=oUiLxmgOvJ8&feature=youtu.be  

Q ]]
My Student validation is NOT working properly, Why?
ANSWER Put in if statement for all fields using [0]

Q ]]
Refactor index.js
ANSWER
    10:30 https://www.youtube.com/watch?v=2xvuGWI3H58&feature=youtu.be
    A single index.js file is ok

Q ]]
I added validations for all attributes when adding a new word
    it prevents empty boxes from creating a new word but
   * it does not give a message of what went wrong to the student
ANSWER Add if statement & adjust create action in Controller & put if statement in fetch statement checking all fields with [0]

Q1 ]]
How to debug backend to check that information is being posted correctly to create a Word
** Rails server terminal error:    Unpermitted parameter: :student_id
** Completed 422 Unprocessable Entity in 2ms
ANSWER Pry

Q2 ]]
In the wordFormSubmission function, the fetch Post for words is not working. Why?
ANSWER Make sure you have .value on the variables passed in

Q3 ]]
NOTE Do I build actions in the controller for these has_many paths
ANSWER Yes
To display a student's list of words on click [this.words], I need the path =>>     /students/:id/words

    But I can't find a path in =>>  http://localhost:3000/rails/info/routes
    HOWEVER In the rails console Student.all[0].words
            brings up an array of all of Abe's words
    BUT     Also in the rails console Student.all[0]
            Does NOT show any indication that Abe has words
            
        -- OR --

To display list of words for ALL individual students after DOM load [NOTE I successfully fetched an array of word objects]
    - I need a class array of all students that I can iterate over and add their words to their word list



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

Word.create(spelling: "zigzag", pos: "adjective", definition: "sharp turns first to one side and then to the other", sentence: "The US has many zigzag roads.", student_id: 19)

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






====================================

ORIGINAL Page Reload:       this.location.reload()


    // let hideStudents = document.getElementById("container")
    // hideStudents.style.display = "none";

    // let word = new Word(apiWord.spelling, apiWord.pos, apiWord.definition, apiWord.sentence, apiWord.student_id)
    // word.renderWord();

    // let deleteWordForm = document.getElementById("word-form")
    // deleteWordForm.innerHTML = ""

====================================





















To display a student's list of words on click [this.words], I need the path =>>     /students/:id/words
ex 02:00 https://www.youtube.com/watch?v=pGkSHeEZLMU
ex filter   https://www.youtube.com/watch?v=R8rmfD9Y5-c





______________________________________________________


PRY THE BACKEND by placing binding.pry in the Controller files
In Gemfile                      gem 'pry'
cd into backend then run        bundle install
run                             rails s
insert in controller action     binding.pry
(run the app action you're trying to hit ex. index, create, etc)
(see pry results in the rails s server/iTTT)
to test variables, iTTT press   Q 
to exit pry, iTTT               exit    or      Q


iTTT    In a binding pry, looking at variables:

[1] pry(#<StudentsController>)> @student
=> #<Student:0x00007ff5f65e7600

[2] pry(#<StudentsController>)> @student.valid?
=> false

[3] pry(#<StudentsController>)> @student.errors
=> #<ActiveModel::Errors:0x00007ff5f218ea30

[4] pry(#<StudentsController>)> @student.errors.full_messages.to_sentence
=> "Name can't be blank, Nickname can't be blank, and Email can't be blank"
[5] pry(#<StudentsController>)> exit

 







______________________________________________________
NOTE Can there be 2 fetches inside one function ??
In the fetchSingleWordList function:

let studId = parseInt(event.target.dataset.id)
    let studName = function(studId) {

        fetch(`${BASE_URL}/students/${studId}`)
        .then(resp => resp.json())
        .then(apiStudent => { // console.log(apiStudent)

            let s = new Student(apiStudent.id, apiStudent.name, apiStudent.nickname, apiStudent.email)
            return s.nickname
        }







____________________________

        ToDo List
GENERAL
    - ReDo app & include a serializer
    - Resolve files api.js  style.css   & other files
    - Refactor to empty out the index.js file as much as possible
    - practice for assessment: walk through explaining how the app works
    - handle errors & bad input
    - use CSS to style the webpage (Bootstrap)
        https://www.youtube.com/watch?v=CSDHsmNrCEc&feature=youtu.be

STUDENT
    ✅ handle empty form box entries

WORD
    - use student's name to identify their word list
    - handle empty form box entries
    ✅ use [ this.location.reload() ] to add a cancel button to add a word to redirect to main page without creating a word


