"use strict";
var MatchResult;
(function (MatchResult) {
    MatchResult[MatchResult["Win"] = 0] = "Win";
    MatchResult[MatchResult["Lose"] = 1] = "Lose";
    MatchResult[MatchResult["Draw"] = 2] = "Draw";
})(MatchResult || (MatchResult = {}));
function getPoint(result) {
    if (result === MatchResult.Win)
        return 3;
    if (result === MatchResult.Draw)
        return 1;
    return 0;
}
console.log(getPoint(MatchResult.Win));
let notSure = 4;
notSure = "abc";
notSure = false;
let someValue = "abc";
let strLength = someValue.length;
