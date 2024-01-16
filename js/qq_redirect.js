let url = $request.url;
//判断url是否为二次encode
if(url.includes("%25"))url = decodeURIComponent(url);
let redirect = decodeURIComponent(url.match(/\?(?:pf|)url=([^&]+)/)[1]);
$done({ status: "HTTP/1.1 302 Moved Temporarily", headers: { Location: redirect}});