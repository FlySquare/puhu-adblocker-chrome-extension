setInterval(checkAndRemoveAds, 1000);
function checkAndRemoveAds(){
    var ads = document.getElementById("dyg-player-new-player_ima-ad-container");
    if(ads){
        ads.remove();
    }
}