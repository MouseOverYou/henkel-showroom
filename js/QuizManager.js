let slideNum = 0
function toNextQuestion(){
    slideNum++
    if(slideNum>3){
        toFirstQuestion()
        return
    }
    let slidePath = "assets/ui/Quiz_0"+ parseInt(slideNum) + ".png"
    document.getElementById("quiz-screen").src = slidePath
    
}

function toFirstQuestion(){
    slideNum = 0
    document.getElementById("quiz-screen").src = "assets/ui/Quiz_00.png"
}

