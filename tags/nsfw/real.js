const requestHandler = require("../handler");
class RealShit {
    random() {
        let subreddits = ["girlsinyogapants", "Thighs", "thighhighs", "ThickThighs", "UnderwearGW", "datgap", "leggingsgonewild", "pawg", "hipcleavage", "legs", "pantyhose", "ass", 
        "paag", "asstastic", "buttplug", "whooties", "AssholeBehindThong", "Frogbutt", "rearpussy", "CuteLittleButts", "HungryButts", "reversecowgirl", "facedownassup", 
        "butt", "butts", "pawg", "bigasses", "cosplaybutts", "BubbleButts", "assinthong", "smalltitsbigass", "CelebrityButts", "booty", "panties", "FullBackPanties", "PantiesToTheSide",
        "thongs", "xsmallgirls", "PublicSexPorn", "cameltoe", "smallboobs", "LegalTeens", "TooCuteForPorn", "adorableporn", "AsiansGoneWild", "trashyboners", "StraightGirlsPlaying", 
        "LipsThatGrip", "spreadeagle", "dirtysmall", "nsfw", "pussy", "gonewild", "SexyTummies", "SpreadEm", "Ahegao_IRL", "nsfwcosplay", "RealGirls", "lesbians", "Fingering", "AnalGW",
        "anal", "freeuse", "BorednIgnored", "grool", "jilling", "porn", "Amateur", "TinyTits", "PetiteGoneWild", "cumsluts", "AsianHotties", "simps", "slimgirls", "ginger", "palegirls", 
        "BustyPetite", "Innie"];
        return requestHandler.makeRequest("reddit", subreddits[Math.floor(Math.random() *subreddits.length)]);
    }
    thighs() {
        let subreddits = ["girlsinyogapants", "Thighs", "thighhighs", "ThickThighs", "UnderwearGW", "datgap", "leggingsgonewild", "pawg", "hipcleavage", "legs", "pantyhose"];
        return requestHandler.makeRequest("reddit", subreddits[Math.floor(Math.random() *subreddits.length)]);
    }
    ass() {
        let subreddits = ["ass", "paag", "asstastic", "buttplug", "whooties", "AssholeBehindThong", "Frogbutt", "rearpussy", "CuteLittleButts", "HungryButts", "reversecowgirl",
        "facedownassup", "butt", "butts", "pawg", "bigasses", "cosplaybutts", "girlsinyogapants", "BubbleButts", "assinthong", "smalltitsbigass", "CelebrityButts", "booty"];
        return requestHandler.makeRequest("reddit", subreddits[Math.floor(Math.random() *subreddits.length)]);
    }
    panties() {
        let subreddits = ["panties", "FullBackPanties", "AssholeBehindThong", "assinthong", "PantiesToTheSide", "thongs", "UnderwearGW"];
        return requestHandler.makeRequest("reddit", subreddits[Math.floor(Math.random() *subreddits.length)]);
    }
}
module.exports = new RealShit();
