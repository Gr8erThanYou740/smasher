if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    $(document).ready(function(){
        $("#mobileBody").css("display","block");
        $("#body").css("display","none");
        if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
            $("#iphoneBody").css("display","block");
        }
    });
}
else
{ 
    let Usernames = [];
    let NamingMethods = [];
    let Installed = false;
    let NumberOfBots = 20;
    let LoadInline = true;
    let HideCSS = false;
    let CurrentVersion = 0;
    let CurrentMethod = 0;
    let TriggerButton = document.createElement("input");
    
    TriggerButton.type = "button";
    TriggerButton.value = "Smash More!";
    TriggerButton.onmousedown = function(){
        MakeAccount();
    }
    TriggerButton.style = "margin-bottom:0.5%;margin-left:0.5%;width:99%;height:50px;position:fixed;display:block;bottom:0;background-color:#333;outline: 0;box-shadow: none;border: 1px solid #2e2e2e;color:white;font-family: montserrat,'helvetica neue',helvetica,arial,sans-serif;font-weight: 700;font-size:20px;";
    
    $("#GamePin").keyup(function(KeyPressed){
        if (KeyPressed.which == 13){
            ButtonClicked();
        }
    });
    const RandomCaps = function(StringValue){
        let ScrambledString = "";
        for (let i = 0; i< StringValue.length; i++){
            if (Math.random() > 0.5){
                ScrambledString += StringValue[i]; 
            }
            else
            {
                ScrambledString += StringValue[i];
            }
        }
        return ScrambledString;
    }
    const MakeLetters = function(StringLength){
        let LetterPool = "qwertyuiopasdfghjklzxcvbnm1234567890";
        let ScrambledLetters = "";
        for (let i = 0; i< StringLength; i++){
             ScrambledLetters += LetterPool[Math.floor(Math.random()*LetterPool.length)];
        }
        return ScrambledLetters;
    }
    const GenerateName = function(GivenMethod){
        let CurrentName = "";
        switch(GivenMethod){
            case 0: // Random Name
                CurrentName = RandomCaps(Usernames[Math.floor(Math.random()*Usernames.length)]);
                break;
            case 1: // Random ending
                 if($("#base").val().length< 7){
                     CurrentName = RandomCaps($("#base").val()) + "" +MakeLetters(0);
                     break;
                 }
                 else
                 {
                      CurrentName = RandomCaps($("#base").val());
                      break;
                 }
             default:
                 CurrentName = "Smasher"+MakeLetters(5);
        }
        return CurrentName;
    }
    const UpdateName = function(){
         $("#nameExample").html("Example: " + GenerateName(CurrentMethod));
    }
    const ShowExtension = function(){
         $("#install").css("display", "block");
    }
    const HideExtension = function(){
         $("#install").css("display", "none");
    }
    const MakeAccount = function(){
       
    }
}
 
