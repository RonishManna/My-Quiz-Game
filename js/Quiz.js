class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide()
    //write code to change the background color here
background("yellow")
textSize(30)
text("result of the quiz",340,50)
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) her
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestants !==undefined){
  var displayAnswer=230
  fill("Blue")
  textSize(20)
  text("*Note:Contestant who answered correct are highlighted in green color!",130,230)

    //write code to add a note here
for(var plr in allContestants){
  varCorrectAns="2";
  if(CorrectAns===allContestants[plr].answer){
    fill("green")
    
  }
  else fill("red")
  displayAnswer+=30
  textSize(20)
  text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayAnswer)

}
    //write code to highlight contest who answered correctly
    
  }
  }
}
