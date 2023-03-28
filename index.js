const real = require("./tags/nsfw/real"), hentai = require("./tags/nsfw/hentai"), custom = require("./tags/other/custom");
class KazeClientNSFW {
    constructor() {
        this.real = real;
        this.hentai = hentai;
    }
}
class KazeClient {
    constructor() {
        this.nsfw = new KazeClientNSFW();
        this.custom = custom;
    }
}
module.exports = {Client: KazeClient};