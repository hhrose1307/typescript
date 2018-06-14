enum MatchResult { Win, Lose, Draw }

function getPoint(result: MatchResult) {
    if (result === MatchResult.Win) return 3;
    if (result === MatchResult.Draw) return 1;
    return 0;
}

console.log(getPoint(MatchResult.Win));




let someValue: any = "abc";

let strLength: number = (someValue as string);
