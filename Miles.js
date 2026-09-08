// Grabbing elements from the HTML
let StartButton = document.getElementById("StartButton");
let QuestionNumber = document.getElementById("Question");
let NextQButton = document.getElementById("NextQButton");
let AnswerButtons = document.getElementsByClassName("AnswerButton");
let GetElementA = document.getElementById("ButtonA");
let GetElementB = document.getElementById("ButtonB");
let GetElementC = document.getElementById("ButtonC");
let GetElementD = document.getElementById("ButtonD");
let QuestionBox = document.getElementById("QuestionBox");
let Score = document.getElementById("Score");
let IntroPage = document.getElementById("IntroPage");
let GetElementQ = document.getElementById("QuestionText");
let Picture1 = document.getElementById("Picture1")
let Picture2 = document.getElementById("Picture2")
let QPage = document.getElementById("Question Area")
let RPage = document.getElementById("ResultsPage")
let FinalResult = document.getElementById("FinalResult");

//Questions and answers
let Quiz = [
    ["What unique power does Miles Morales have?","Invisibility",'Flight',"Bio-electric venom blast", "Super strength","C"],
    ["Who is Miles Morales' best friend?","Ned Leeds","Flash Thompson","Harry Osborn","Ganke Lee","D"],
    ["What is the name of Miles Morales' father?","Jefferson Davis","Peter Parker","Norman Osborn","Otto Octavius","A"],
    ["What is the name of Miles Morales' mother?","Ruth","Rio","Gwen","Mary","B"],
    ["What is the name of Miles Morales' uncle?","Aaron Davis","Peter Parker","Norman Osborn","Otto Octavius","A"],
    ["What is the name of Miles Morales' love interest?","Gwen Stacy","Mary Jane Watson","Felicia Hardy","Liz Allan","A"],
    ["What is the name of Miles Morales' mentor?","Peter Parker","Norman Osborn","Otto Octavius","Aaron Davis","A"],
    ["What is the name of Miles Morales' high school?","Midtown High School","Brooklyn Visions Academy","Stuyvesant High School","Bronx High School of Science","B"],
    ["What is the name of the corporation Miles fights against?","Oscorp","Alchemax","Roxxon","Hammer Industries","C"],
    ["What shoes does Miles Morales wear in the game?","Nike Air Jordan 1","Adidas Yeezy Boost 350","Puma RS-X","Reebok Classic Leather","A"],
    ["What is the name of Miles Morales' uncle's villain identity?","Prowler","Tombstone","Shocker","Rhino","A"],
    ["What city does Miles Morales protect?","Chicago","New York City","Los Angeles","Boston","B"],
    ["What is the name of Miles' venom attack?","Venom Strike","Electric Blast","Venom Blast","Spider Shock","C"],
    ["Who is the leader of the Underground?","Tinkerer","Silver Sable","Black Cat","Wraith","A"],
    ["What is the real name of the Tinkerer?","Phin Mason","Rio Morales","Hailey Cooper","Gloria Grant","A"],
    ["Which villain uses a giant mechanical suit in Spider-Man: Miles Morales?","Sandman","Vulture","Scorpion","Rhino","D"],
    ["What is Miles' father's occupation?","Teacher","Firefighter","Doctor","Police officer","D"],
    ["What colour is Miles' Spider-Man suit primarily?","Red and blue","Black and red","Green and black","White and blue","B"],
    ["What is Miles Morales' middle name?","Gonzalo","Antonio","James","Luis","A"],
    ["Who created Miles Morales?","Stan Lee and Steve Ditko","Brian Michael Bendis and Sara Pichelli","Dan Slott and John Romita Jr.","Todd McFarlane and Erik Larsen","B"],
    ["What comic did Miles Morales first appear in?","Ultimate Fallout #4","Amazing Spider-Man #1","Spider-Man #1","Ultimate Spider-Man #1","A"],
    ["Which universe did Miles originally come from?","Earth-616","Earth-65","Earth-1610","Earth-42","C"],
    ["What is Nuform used for?","A new energy source","A healing medicine","A weapon","A communication device","A"],
    ["What does Miles use to travel around the city?","A jetpack","Webs","A motorcycle","A glider","B"],
    ["Who voices Miles Morales in Spider-Man: Into the Spider-Verse?","Shameik Moore","Hailee Steinfeld","Jake Johnson","Oscar Isaac","A"],
    ["What sport does Miles play at Brooklyn Visions Academy?","Basketball","Football","Soccer","Baseball","A"],
    ["What does the 'Spider-Man' symbol on Miles' suit look like?","A black spider","A red spider","A white spider","A blue spider","B"],
    ["What is Earth-42's version of Miles Morales known as?","Prowler","Spider-Man","Spider-Man 2099","The Tinkerer","A"],
    ["What is Peni Parker's robot called?","Arachnid","SPIDER-X","SP//dr","PENI-01","D"],
    ['Which villain causes the multiverse to collide in the first film?',"Green Goblin", 'Venom', "Doctor Octopus", "Kingpin", "D"],
    ["Which Spider-Person comes from a black and white comicbook universe?","Spider-Ham", "Peni Parker", "Spider-Man Noir", "Spider-Gwen", "C"],
    ["What is Gwen Stacy’s superhero name?", "Spider-Woman", "Ghost-Spider", "Spider-Gwen", "Silk", "C"],
    ["What is the name of the villain chasing Miles throughout Across the Spider-Verse?", "The Spot", "Morbius", "The Prowler", "Scorpion", "A"],
    ["Who leads the Spider Society in Across the Spider-Verse?","Peter Parker","Miguel O'Hara","Jessica Drew","Hobie Brown","B"],
    ["What is a “canon event” in Across the Spider-Verse?", "A battle with Venom","A moment that happens in every Spider-Persons story","A portal between universes","A Spider Society meeting","B"]
]

// Dont show the score in the intro page
Score.style.display = "none";
QPage.style.display = "none"
RPage.style.display = "none"

//Setting variables
let Count = 0;
let score = 0;
let CorrectAnswer;
let index;

//Get a random number for the question index
function getRandomInt() {
    max = Quiz.length - 1;
    index =  Math.floor(Math.random() * max);
}

//Getting next question using the random index
function NextQuestion(index){
    //Get the question from the quiz array using random index
    let CurrentQuestion = Quiz[index];
    let QuestionText = CurrentQuestion[0];
    let OptionA = CurrentQuestion[1];
    let OptionB = CurrentQuestion[2];
    let OptionC = CurrentQuestion[3];
    let OptionD = CurrentQuestion[4];
    CorrectAnswer = CurrentQuestion[5];

    // Update the question number
    QuestionNumber.textContent = `Question:${Count}`;

    //Write the answer buttons and question 
    GetElementA.textContent = "A: " + OptionA;
    GetElementB.textContent = "B: " + OptionB;
    GetElementC.textContent = "C: " + OptionC;
    GetElementD.textContent = "D: " + OptionD;
    GetElementQ.textContent = QuestionText;

    //Remove the question from the quiz array so it doesn't repeat
    let removed = Quiz.splice(index, 1);

}

//Setting up quiz
//Once start button is pressed
StartButton.addEventListener("click", function(){

    //Remove itro page 
    StartButton.style.display = "none";
    IntroPage.style.display = "none";

    //Display the score
    Score.style.display = "block";
    QPage.style.display = "block"

    //Get question
    Count++
    getRandomInt();
    NextQuestion(index)

    //Remove from page
    NextQButton.style.display = "none";
    FinalResult.style.display = "none";
});

// Next question
NextQButton.addEventListener("click", function(){
    if (Count == 11){
        Count--
        //Remove questions and buttons
        NextQButton.style.display = "none";
        GetElementA.style.display = "none";
        GetElementB.style.display = "none";
        GetElementC.style.display = "none";
        GetElementD.style.display = "none";
        QuestionBox.style.display = "none";
        Score.style.display = "none";
        RPage.style.display = "block"
        
        //get result 
        CalculateScore(score, Count);
    }else{
        //Enable answer buttons
        GetElementA.disabled = false;
        GetElementB.disabled = false;
        GetElementC.disabled = false;
        GetElementD.disabled = false;

        //Changing answer buttons colour back to default and removing classes
        GetElementA.classList.remove("WrongAnswer", "CorrectAnswer");
        GetElementB.classList.remove("WrongAnswer", "CorrectAnswer");
        GetElementC.classList.remove("WrongAnswer", "CorrectAnswer");
        GetElementD.classList.remove("WrongAnswer", "CorrectAnswer");

        //Getting question 
        getRandomInt();
        NextQuestion(index)
        //Remove next question button
        NextQButton.style.display = "none";
        //Result page 
        if (Count == 10) {
            //Remove questions and buttons
            NextQButton.textContent = "Results!"
    }
    }

});

// Get elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
tabcontent[0].style.display = "none";


//Function for clicking on the Start button to open the quiz 
function OpenTab(evt, TabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Checking answers to the question
function CheckAnswer(selectedOption, CorrectAnswer) {
    //Show next questio button
    NextQButton.style.display = "block";

    //Disable answer buttons
    GetElementA.disabled = true;
    GetElementB.disabled = true;
    GetElementC.disabled = true;
    GetElementD.disabled = true;


    //Changing class name to change colours of correct & incorrect answers
    GetElementA.classList.add("WrongAnswer");
    GetElementB.classList.add("WrongAnswer");
    GetElementC.classList.add("WrongAnswer");
    GetElementD.classList.add("WrongAnswer");

    if (CorrectAnswer == "A") {
        GetElementA.classList.remove("WrongAnswer");
        GetElementA.classList.add("CorrectAnswer");
    } else if (CorrectAnswer == "B") {
        GetElementB.classList.remove("WrongAnswer");
        GetElementB.classList.add("CorrectAnswer");
    } else if (CorrectAnswer == "C") {
        GetElementC.classList.remove("WrongAnswer");
        GetElementC.classList.add("CorrectAnswer");
    } else if (CorrectAnswer == "D") {
        GetElementD.classList.remove("WrongAnswer");
        GetElementD.classList.add("CorrectAnswer");
    }
    //Update score
    if (selectedOption == CorrectAnswer) {
        score++;
        
    }

    //Question number 
    Count++
    //Score update 
    Score.textContent = `Score:${score}/${Count - 1}`;


}


// Calculate score
function CalculateScore(Score,QuestionNumber){
    Result = (Score/QuestionNumber)*100;
    //Showing results page

    Picture1.style.display = "none";
    Picture2.style.display = "none";

    if (Result >= 80){
        FinalResult.textContent = `You scored ${Result}%! You are a true Miles Morales fan!`;
        Picture1.style.display = "block";
    } else if (Result >= 50){
        FinalResult.textContent = `You scored ${Result}%! You are a Miles Morales fan!`;
        Picture1.style.display = "block";
    } else {
        FinalResult.textContent = `You scored ${Result}%! You need to brush up on your Miles Morales knowledge!`;
        Picture2.style.display = "block";
        
    }
    FinalResult.style.display = "block";
    
    
}