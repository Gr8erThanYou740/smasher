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
var buildNumber =0;
var isSmasherInstalled = false;
var loadInline = true;
var numberOfKahoots =20;
var showCSS=false;
var addMoreButton= document.createElement("input");
var namingMethod = 0;
var namingMethods = ["Random name","Random Ending","Choose Name"];
var namesExample= [
    "Mohxy", "Vxire", "Gahmuret", "Tara", "Tomi", "Argor", "Kelretu", "Polyzynn", "Tekrala", "Kesta", "Suelle",
    "cuntlad", "BuyMyAids", "Wilihey", "Milkshook", "Kanker Luke", "SUCK YOUR MUM", "Acer", "ChRoMoSoMe CoLlEcToR",
    "Deep-fried Daddy", "Deli Tuna", "Jordane", "W33d Goddess", "H3mp Goddess", "Ben Dover", "Eileen Dover", 
    "Suq Madiq", "Bita Negar", "Adolf_Hipster", "Fascist Deli", "Rusty Tromboner", "ur search history", "actual dirt",
    "Adolphin", "Tana", "noggers are bad", "IceWallowCome", "Akane", "Kareina", "IGassedJuice", "xDEFCONx", "Drazzle",
    "cuckling", "Dirty Dan", "Kat", "Ken", "SassySelty", "Ria", "Yoru", "Korodo", "Meatbeater6000", "noihu", "Ryki",
    "Memes.DLL", "Unspeakable Yeet", "*unoriginal nickname*", "a disappointment", "AUSHWITZ JUDEN '47", "bean swallow",
    "Belgian Fries", "Brandy", "Cumstain Catharsis", "defective toe man", "Eikster", "FleetOfYeet", "Galactic Retard",
    "Gudendrunk", "iwanttodie", "Kamibel", "Nyxan", "scilz", "Dertixz", "Kaufee", "Gaslarga", "Gargix", "Nimmy Jeutron",
    "Sexy Vegan", "XXXTentacion", "XXXTerminated", "Yharon", "XXXTinguished", "Sora", "3spooky5me", "Alcoholic Kitty",
    "Allarus", "Arima", "Baltazoiro", "Bayru", " Brisingrvindr", "Captain Java", "D3SOLATION", "Darius", "Amy", "Arella",
    "Diet Coke", "Bepsis", "el conke", "Erich Von Manstein", "Exodia", "Astaea", "Lindford", "Figueira", "foxburn",
    "go commit helpfulness", "go commit tower jump", "go commit neck rope", "God", "Hypl3x", "Kaiser Wilhelm", "Kyrie",
    "Lunaria", "Neutrix", "Trisha", "Dante", "Lucy", "Nostalgion", "jail-bait", "not jail-bait", "Octopuss", "1-inch wonder",
    "2-inch punisher", "Jewslayer69", "Pussyslayer9000", "Jewspanker6000", "Phynox", "sadist", "Shireen Mazari", "shoot me",
    "Shrok", "Spitzkopf Larry", "T H U N D E R T H I G H S", "Taint Painter", "printf('Goodbye, world/n');", "Microsoft Github",
    "thotdog", "thotimus prime", "BuildTheWall", "Shrauger", "Beloxy", "Virgina", "cucker", "Loak", "Cancer.exe", "AIDS.DLL",
    "please send help", "Yavin", "Mars", "Jupiter", "Savitar", "Pluto", "Heinrich Himmler", "Bastet", "Anubis", "ur mom big gay",
    "hi welcome to chilis", "Xx_W33B_xX", "Uranus", "begone thot", "domesticated thot", "Puck Uranus", "Yuck Fou", "SilentMemer",
    "Mr. Ethnic Cleansing", "Scheibe", "cyka blyat", "Der Mist", "Geh Zum Teufel", "Arschloch", "Arschgeige", "Dummkopf",
    "Wifebeater9000", "Karl Marx", "Puto", "Mierda", "clapping gorilla cheeks", "Veegee", "Arason", "Furfag", "show bob and vegene",
    "Zoey", "Joey", "Cyrus", "Cynthia", "Meme Queen", "Robby Rotten", "Sportacus", "Alfred", "Serena", "Tristan", "Andy",
    "Billy Beta", "Zenny", "hi daddy", "Kim-Jung Uno", "Aphrodite", "PAPA SNAKU", "100% Fascism", "Linux4Lyfe", "chrome big pp",
    "Brok3n", "AUTISM", "Cupcakes4Jesus", "Peter Porker", "Boang Woman", "Republicunt", "DemocRAT", "Adderall.exe", "some object",
    "Pole Smoker", "Swamp Donkey", "*Autistic Screech*", "Bong Huffer", "BAN ALL FURRIES", "Reefer", "SpankBank", "Swiggster",
    "Punani", "Swive", "Felch", "W A N K E R", " Sernie Banders", "Covfefe", "Pickle Rick", "xX_Suicidal_Xx", "Asthma.exe",
    "Stiffy Knight", "Claire", "Rump Ranger", "Elon Musk", "Elongated Muskrat", "Jim Crow", "Nayq", "Mordekai", "Bruno",
    "Gesely", "bush did 9/11", "Bob Ross", "Communist Pubes", "Faguette", "Brit Jew", "Trotsky", "Sir Comcision"
];
   // var i;
    //i = 1;

addMoreButton.type = "button";
addMoreButton.value = "Smash More!";
addMoreButton.onmousedown = function(){
    addMoreKahoots();
};
addMoreButton.style="margin-bottom:0.5%;margin-left:0.5%;width:99%;height:50px;position:fixed;display:block;bottom:0;background-color:#333;outline: 0;box-shadow: none;border: 1px solid #2e2e2e;color:white;font-family: montserrat,'helvetica neue',helvetica,arial,sans-serif;font-weight: 700;font-size:20px;";
$("#GamePin").keyup(function(e){
    if (e.which == 13){
        buttonClicked();
    }
});

const randomCaps = function(baseName){
    let newName = "";
    for (let i = 0; i< baseName.length; i++){
        if (Math.random() > 0.5){
            newName += baseName[i];
        }
        else 
        {
            newName += baseNsame[i];
        }
    }
    return newName;
}
    

function generateRandomLetter(length)
{
    var randomLetters = "";
    var letters= "qwertyuiopasdfghjklzxcvbnm1234567890";
    for(var i=0; i<length; i++)
    {
        randomLetters += letters[Math.floor(Math.random()*letters.length)];
    }
    return randomLetters;
}

function generateName(mode)
{
    var name="";
    switch(mode)
    {
        case 0: // Random Name
            name = randomCaps(namesExample[Math.floor(Math.random()*namesExample.length)]);
            break;
        case 1: // Random Ending
            name = ($("#base").val().substr(0,11) +"." +generateRandomLetter(5)).substr(0,16);
            break;
        case 2: // Random Caps
            if($("#base").val().length<7)
            {
                name = randomCaps($("#base").val()) + "" +generateRandomLetter(0);
                break;
            }
            else
            {
                name = randomCaps($("#base").val());
                break;
            }
        default:
            name = "Smasher"+generateRandomLetter(5);
    }
    return name;
}

function updateName()
{
    $("#nameExample").html("Example: " + generateName(namingMethod));
}

function showExtension()
{
    $("#install").css("display", "block");
}
function hideExtension()
{
    $("#install").css("display", "none");
}

function addMoreKahoots()
{
    document.body.removeChild(addMoreButton);
    for(var i=0; i<5; i++)
    {
        var frame = document.createElement("iframe");
        frame.src="http://www.kahoot.it";
        document.body.appendChild(frame);
    }
    document.body.appendChild(addMoreButton);
}

function showSettings()
{
    $("#settings").css("display", "block");
}
function hideSettings()
{
    numberOfKahoots = parseInt($("#numberOfKahoots").val());
    $("#settings").css("display", "none");
}

function showAbout()
{
    $("#info").css("display","block");
}
function hideAbout()
{
    $("#info").css("display","none");
}

function changeNaming()
{
    namingMethod+=1;
    if(namingMethod==namingMethods.length)
    {
        namingMethod=0;
    }
    if(namingMethod==0)
    {
        $("#baseName").css("display", "none");
        $("#base").css("display", "none");
    }
    else
    {
        $("#baseName").css("display", "block");
        $("#base").css("display", "block");
    }
    $("#namingMethod").attr('value',namingMethods[namingMethod]);
    updateName();
}

function toggleInLine()
{
    loadInline = !loadInline;
    var newValue = "";
    if(loadInline)
    {
        newValue="Yes";
    }
    else
    {
        newValue="No";
    }
    $("#inline").attr('value',newValue);
}
function loadCssToggle()
{
    showCSS = !showCSS;
    var newValue = "";
    if(showCSS)
    {
        newValue="Beautiful";
    }
    else
    {
        newValue="High";
    }
    $("#cssLoad").attr('value',newValue);
    $("#asdfghjklqwertyuio").attr("cssEnabled",showCSS);
}

function buttonClicked()
{
    if(!isSmasherInstalled)
    {
        showExtension();
        return;
    }
    gameID = $("#GamePin").val();
    var canContinue = true;
    if(gameID=="")
    {
        canContinue=false;
    }
    for(var i=0; i<gameID.length; i++)
    {
        if(isNaN(parseInt(gameID[i])))
        {
            canContinue = false;
        }
    }
    if(canContinue)
    {
        $("#asdfghjklqwertyuio").attr("value",gameID);
        $("#asdfghjklqwertyuio").attr("namingConvention",namingMethod);
        $("#asdfghjklqwertyuio").attr("baseName",$("#base").val());
        var newHTML = "<h1>Kahoot smashing in progress...</h1>";
        for(var i=0; i< numberOfKahoots; i++)
        {
            if(loadInline)
            {
                newHTML += "<iframe src='https://kahoot.it'></iframe>";
            }
            else
            {
                window.open("https://www.kahoot.it");
            }
        }
        if(loadInline){
            $("#body").html(newHTML);
        }
        document.body.appendChild(addMoreButton);
    }
}
$(document).ready(function(){setTimeout(function(){
    updateName();
    $('#GamePin').on('keyup', function (e) {
    if (e.keyCode == 13) {
        buttonClicked();
    }
});
},500);})

}
