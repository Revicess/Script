var body = $response.body;

var replacements = [
    [/\"vip\":\w+/g, '\"vip":true'],
    [/\"svip_mechanism\":\d+/g, '\"svip_mechanism":1'],
    [/\"is_life_artist\":\w+/g, '\"is_life_artist":true'],
    [/\"isnew\":\w+/g, '\"isnew":true'],
    [/\"vip_end_at\":\d+/g, '\"vip_end_at":4092599350'],
    [/\"vip_end_at_mills\":\d+/g, '\"vip_end_at_mills":4092599350000'],
    [/\"vip_level\":\d+/g, '\"vip_level":11'],
    [/\"latest_vip_level\":\d+/g, '\"latest_vip_level":11'],
    [/\"is_certify_user\":\w+/g, '\"is_certify_user":true'],
    [/\"be_follow_count\":\d+/g, '\"be_follow_count":1000000'],
    [/\"follow_count\":\d+/g, '\"follow_count":1000000'],
    [/\"score\":\d+/g, '\"score":1000000']
];

replacements.forEach(([regex, replacement]) => {
    body = body.replace(regex, replacement);
});

$done({body});
