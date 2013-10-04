var Game = {};
Game.FIXCSS = {};
Game.SaveManager = {};

Game.Data = {
    const: {
        COOKIE_STRING: 'Game_DiseaseFactory_cookie'
    },
    playerName: ''
};




Game.SaveManager.Save = function() {
    var DATA;
    $.cookie('Game_DiseaseFactory_cookie', encode64(DATA), {expires: 366});
};





Game.Start = function() {
    Game.FIXCSS.AutoFix();


};
Game.FIXCSS.AutoFix = function() {

};
$(document).ready(function() {
    Game.Start();
});