//匹配链接来源：https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Plugin/QQ_Redirect.plugin
/*
^https:\/\/c\.pc\.qq\.com\/(ios|index|middlem)\.html\?(pf)?url= url script-response-header https://raw.githubusercontent.com/Revicess/script/master/js/qq_redirect.js

^https:\/\/pingtas\.qq\.com\/webview\/pingd\?dm=c\.pc\.qq\.com&pvi=\d+&si=s\d+&url=\/(ios|middlem)\.html\?(pf)?url%3d url script-response-header https://raw.githubusercontent.com/Revicess/script/master/js/qq_redirect.js

^https:\/\/cgi\.connect\.qq\.com\/qqconnectopen\/get_urlinfoForQQV2\?url= url script-response-header https://raw.githubusercontent.com/Revicess/script/master/js/qq_redirect.js

hostname = pingtas.qq.com, c.pc.qq.com, cgi.connect.qq.com
*/

let url = $request.url;
//判断url是否为二次encode
if(url.includes("%25"))url = decodeURIComponent(url);
let redirect = decodeURIComponent(url.match(/\?(?:pf)?url=([^&]+)/)[1]);
$done({ status: "HTTP/1.1 302 Moved Temporarily", headers: { Location: redirect}});