lines (226 sloc)  5.77 KB
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
 
