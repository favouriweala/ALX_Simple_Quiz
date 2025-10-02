function checkAnswer(){
    const correctAnswer = "4";
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedRadio.value;


    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done."
    }
    else{
         feedback.textContent = "That's incorrect. Try again!"
    }
}
const button = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);