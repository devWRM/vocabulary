class Word {
    constructor(spelling, pos, definition, sentence) {
        this.spelling = spelling;
        this.pos = pos;
        this.definition = definition;
        this.sentence = sentence;
    }



    renderStudentWord() {

        // let studentId = parseInt(event.target.dataset.id)
        // let wordsContainer = document.getElementById("words-container")
        // wordsContainer.innerHTML +=

        let wordList = document.querySelector("p")
        console.log(wordList)
        // wordList.innerHTML +=

        // `
        // <div>
        //     <b>Vocabulary Word:</b> ${this.spelling}</br>           
        //     <b>Part of speech:</b> ${this.pos}</br>
        //     <b>Definition:</b> ${this.definition}</br>
        //     <b>Sentence:</b> ${this.sentence}
             
        // </div>
        // `
    }





    renderWord() {
        let wordsContainer = document.getElementById("words-container")
        wordsContainer.innerHTML +=

        `
        <div>
            <b>Vocabulary Word:</b> ${this.spelling}</br>           
            <b>Part of speech:</b> ${this.pos}</br>
            <b>Definition:</b> ${this.definition}</br>
            <b>Sentence:</b> ${this.sentence}
             
        </div>
        <div>______________________</div>
        `
    }







}