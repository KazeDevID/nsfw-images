
# nsfw-images
> Pulls images from reddit and danbooru (more will be added in the future)
> Originally made for a discord bot

### Installation
```
npm install nsfw-images
```

## How to use
```js
const Nsfw = require("nsfw-images");
const KazeClient = new Nsfw.Client();
// getting real images
KazeClient.nsfw.real.ass().then(json => {
    console.log(json);
    // outputs data with image url, possible source and other stuff
}).catch(error => {
    console.log(error);
    // outputs error
});

// getting hentai images
KazeClient.nsfw.hentai.ass().then(json => {
    console.log(json);
    // outputs data with image url, possible source and other stuff
}).catch(error => {
    console.log(error);
    // outputs error
});

// custom request
KazeClient.custom.do("https://google.com/", /<meta.*?>/gm).then(matches => {
    console.log(matches);
    // outputs an array of all matches
}).catch(error => {
    console.log(error);
    // outputs error
});
```
### Real

| Tag | Description |
|:---:|:-----------:|
| ass | gets ass pictures from reddit |
| thighs | gets thigh pictures from reddit |
| panties | gets pictures of girls in panties from reddit |
| random | gets random nsfw pictures from reddit |

### Hentai

| Tag | Description |
|:---:|:-----------:|
| ass | gets ass pictures from sites|
| thighs | gets thighs from danbooru |
| panties | gets panties from danbooru |
| feet | gets feet from  danbooru |

### Custom

| Site | Regex |
|:----:|:-----:|
| Provide Url to a website | regex pattern ( ͡° ͜ʖ ͡°) (e.g: /"file-url":".*?"/gm) |

### Change Log
* Added "gelbooru" to hentai's "ass" source

### Todo
* Add "gelbooru" to the rest of hentai sources
* Add "random" to hentai
* Add more sources to hentai and real images (preferably higher quality)


### Support

[ GITHUB ]: https://github.com/KazeDevID/
