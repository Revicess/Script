// 作者：Revice
/*
//Loon订阅脚本
[Script]
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Home\/HomeFeed script-path=https://raw.githubusercontent.com/Revicess/script/master/js/BiliMangaFeeds.js, requires-body=true, tag=哔漫信息流周边推荐

[MITM]
hostname=manga.bilibili.com

//圈x远程引用
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Home\/HomeFeed url script-response-body https://raw.githubusercontent.com/Revicess/script/master/js/BiliMangaFeeds.js

hostname=manga.bilibili.com
*/

let obj=JSON.parse($response.body);
obj.data.feeds = obj.data.feeds.filter(item => !(item.type === 15||item.type === 30));
$done({body: JSON.stringify(obj)});
