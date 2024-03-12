// 作者：Revice
/*
//Loon订阅脚本
[Script]
http-response ^https?:\/\/j1\.pupuapi\.com\/client\/marketing\/banner\/v7\?position_types=2[%A-Z0-9]+&store_id script-path=https://raw.githubusercontent.com/Revicess/script/master/js/PupuSplashAds.js, requires-body=true, tag=朴朴超市开屏广告

[MITM]
hostname=j1.pupuapi.com

//圈x远程引用
^http:\/\/(54\.222\.159\.138:8053|161\.189\.16\.5:8053|dnsazure\.pupuapi\.com)\/httpdns\/resolve\?domain=j1\.pupuapi\.com$ url reject-dict
^https?:\/\/j1\.pupuapi\.com\/client\/marketing\/banner\/v7\?position_types=2[%A-Z0-9]+&store_id url script-response-body https://raw.githubusercontent.com/Revicess/script/master/js/PupuSplashAds.js

hostname=j1.pupuapi.com
*/

let obj=JSON.parse($response.body);
obj.data = obj.data.filter(item => !(item.position_type === 50));
$done({body: JSON.stringify(obj)});
