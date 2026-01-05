{

///规则包
// "spider":"https://download.kstore.space/download/3051/JAR/FTY-231115.JAR;md5;364c0f012e73a8801a69900fc25ae9c1",
//"spider":"https://la.kstore.space/download/3051/JAR/FTY-230313.jar;md5;4D4928E4505E301355AEDFA1E43E9D71",
// "spider":"https://3051.kstore.space/JAR/fan.txt;md5;2a085160a4140e1697c5d6393901ec7e",
// "spider":"https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1726760091321/fan.txt;md5;050512c9db356ad449af9d37dde8c5f0",
"spider":"https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1729544948101/fan.txt;md5;280cd3d4d397dce21bf99a30c7ca91f2",

"logo":"https://gitee.com/TLX212/tlx-jk/raw/master/%E6%82%9F%E7%A9%BA.gif",
///直
"lives":[
    {"name":"live1","ua":"Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/120.0.0.0Safari/537.36Edg/120.0.0.0","type":0,"url":"https://xhdwc.tk/xiutan.m3u",
   
		    "epg": "http://epg.112114.xyz/?ch={name}&date={date}",
                    "logo": "https://epg.112114.xyz/logo/{name}.png"
	    },     
{
"name":"live4",
"url":"https://raw.githubusercontent.com/YueChan/Live/refs/heads/main/APTV.m3u",
"type":0,
"playerType":1,
"epg":"http://epg.51zmt.top:8000/api/diyp/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png",
"ua":"Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/108.0.0.0Safari/537.36"
},
{
"name":"live3",
"url":"http://tvkj.top/tvlive.txt",
"type":0,
"playerType":1,
"epg":"http://epg.51zmt.top:8000/api/diyp/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png",
"ua":"Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/108.0.0.0Safari/537.36"
},
{
"name":"live0",
"url":"https://gitee.com/langli-little-white-dragon-1/little-white-dragon/raw/master/zb.txt",
"type":0,
"playerType":1,
"epg":"http://epg.51zmt.top:8000/api/diyp/?ch={name}&date={date}",
"logo":"https://epg.112114.xyz/logo/{name}.png",
"ua":"Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/108.0.0.0Safari/537.36"
}
],

//壁纸
"wallpaper":"https://tuapi.eees.cc/api.php?category={fengjing,biying}&type=302)",

//广告
"doh":[
{"name":"Google","url":"https://dns.google/dns-query","ips":["8.8.4.4","8.8.8.8"]},
{"name":"Cloudflare","url":"https://cloudflare-dns.com/dns-query","ips":["1.1.1.1","1.0.0.1","2606:4700:4700::1111","2606:4700:4700::1001"]},
{"name":"AdGuard","url":"https://dns.adguard.com/dns-query","ips":["94.140.14.140","94.140.14.141"]},
{"name":"DNSWatch","url":"https://resolver2.dns.watch/dns-query","ips":["84.200.69.80","84.200.70.40"]},
{"name":"Quad9","url":"https://dns.quad9.net/dns-quer","ips":["9.9.9.9","149.112.112.112"]}],
"rules":[
{"name":"暴风廣告","hosts":["bfzy","s5.bfzycdn"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:3,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},
{"name":"星星","hosts":["aws.ulivetv.net"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:8,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:9,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},
{"name":"量子廣告","hosts":["vip.lz","hd.lz"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.433333,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
{"name":"非凡廣告","hosts":["vip.ffzy","hd.ffzy"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
{"host":"piaku.cc","rule":[".mp4",".m3u8","?auth_token","m3u8"]},
{"host":"app.syrme.top","rule":["aliyundrive.net","cn-beijing-data","?auth_token","m3u8"]},
{"host":"v.3412.net.cn","rule":[".mp4","security-token=","aliyuncs.com","m3u8"]},
{"host":"jx.jsonplayer.com","rule":[".mp4",".m3u8","?vkey=","110.42.2.115","m3u8"]},
{"host":"movie.bulei.cc","rule":[".mp4",".m3u8","?vkey=","1ftn_handler","http://1.71.18.153","mu.dcd1.cn","aliyundrive.net","m3u8"]},
{"host":"rebozj.pro","rule":[".mp4",".m3u8","https://p3-sign.douyinpic.com","m3u8"]},
{"host":"brovod.com","rule":[".m3u8"]},
{"host":"https://www1.gntv.live","rule":[".m3u8","m3u8?","4k.clyjx.cn:97"]},
{"host":"renren.pro","rule":[".m3u8"]},
{"host":"https://v.3412.net.cn","rule":[".m3u8",".m3u8?",".mp4"]},
{"host":"v.t-ui.cn","rule":[".m3u8","m3u8?","vip.ffzy-play4.com"]},
{"host":"cj.ffzyapi.com","rule":[".m3u8","m3u8?"]},
{"host":"siguyy.com","rule":["mp4",".m3u8","https://ccp-bj29-video-preview.oss-enet.aliyuncs.com","aliyuncs.com"]},
{"name":"火山嗅探","hosts":["huoshan.com"],"regex":["item_id="]},
{"name":"抖音嗅探","hosts":["douyin.com"],"regex":["is_play_url="]},
{"name":"量子","hosts":["vip.lz","v.cdnlz","hd.lz"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.433333,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:18.5333,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
{"name":"非凡","hosts":["vip.ffzy","hd.ffzy"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:25.0666,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
{"name":"暴风","hosts":["bfzy","s5.bfzycdn"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:3,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
{"name":"索尼","hosts":["suonizy"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:15.1666,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:15.2666,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]},
{"name":"nm","hosts":["toutiaovod.com"],"regex":["video/tos/cn"]},
{"name":"蜗牛","hosts":["vip.123pan.cn","rescdn.wuxivlog.cn"],"regex":["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:10.840000,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:10.120000,[\\s\\S]*?#EXT-X-DISCONTINUITY","#EXTINF.*?\\s+.*?1o.*?\\.ts\\s+"]}

],

//配置源
"sites":[

//内置规则※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{"key":"豆豆","name":"💝豆瓣推荐-241022-💝","type":3,"api":"csp_DouDou","searchable":0,"quickSearch":0,"filterable":0},

// {"key":"csp_SP360","name":"🌈点击主页【卡顿切换视频源】🌞","type":3,"api":"csp_SP360","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"主页","name":"🌈点击主页【卡顿切换视频源】🌞","type":3,"api":"csp_SP360","searchable":1,"quickSearch":1,"filterable":1,"jar":"https://download.kstore.space/download/3051/JAR/custom_spider原画在前.jar;md5;198B4D6C23D6087018B816453A06A2B6","playerType":2},


{"key":"苹果","name":"🍎小苹果┃复活","type":3,"api":"csp_LiteApple","searchable":1,"quickSearch":1,"changeable":1},
{"key":"贱贱","name":"🐭荐片┃p2p","type":3,"searchable":1,"quickSearch":1,"changeable":1,"playerType":"1","api":"https://gitlab.com/fantaiying/ext/-/raw/main/drpy2.min.js","ext":"https://gitlab.com/fantaiying/ext/-/raw/main/jp.js"},
{"key":"厂长","name":"📔厂长┃不卡","type":3,"api":"csp_NewCz","playerType":2,"searchable":1,"quickSearch":1,"changeable":1,"ext":"http://www.czzy77.com/"},
{"key":"原创","name":"☀原创┃无广","type":3,"api":"csp_YCyz","timeout":15,"searchable":1,"quickSearch":1,"changeable":1},
{"key":"zxzj","name":"🍊在线┃外剧","type":3,"api":"csp_Zxzj","timeout":15,"searchable":1,"quickSearch":1,"changeable":1,"ext":"https://www.zxzja.com/"},
{
      "key": "南瓜",
      "name": "1080P站-SSSS南瓜",
      "type": 3,
      "api": "csp_NanGua",
      "timeout": 15,
      "playerType": 2,
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 1,
        "jar": "https://gitee.com/changqing19992/box/raw/master/ng.jar"
    },
{"key":"萌米","name":"👀萌米┃多线","type":3,"api":"csp_AppTT","playerType":2,"searchable":1,"quickSearch":1,"changeable":1,"ext":"AO7TcBkd8Iifux0Y8Qze6tVlMg=="},
{"key":"南瓜","name":"🎃南瓜┃多线","type":3,"api":"csp_NanGua","playerType":2,"searchable":1,"quickSearch":1,"changeable":1},
{"key":"欢视","name":"👓欢视┃多线","type":3,"api":"csp_AppTT","playerType":2,"searchable":1,"quickSearch":1,"changeable":1,"ext":"AO7TcBkd8IPB+BwH4Qma+opv"},

{"key":"低端","name":"⏮️低端┃外剧","type":3,"api":"csp_Ddrk","playerType":"2","searchable":1,"quickSearch":1,"changeable":1},
{"key":"可可","name":"👻可可┃多线","type":3,"api":"csp_Kekys","timeout":15,"playerType":2,"searchable":1,"quickSearch":1,"changeable":1},
{"key":"可可影视","name":"1080P站-E","type":3,"api":"csp_Keke","searchable":1,"quickSearch":1,"filterable":1,"jar":"https://gitee.com/changqing19992/box/raw/master/spider.jar"},
{"key":"文采","name":"💮文采┃秒播","type":3,"api":"csp_Jpys","playerType":2,"searchable":1,"quickSearch":1,"changeable":1},

{"key":"小点","name":"💥小点┃多线","type":3,"api":"csp_Appxd","searchable":1,"quickSearch":1,"changeable":0,"ext":"FbjEd1ddiJ6bwA0Z8ijG89k6OstPBosSHy5L8uXWgRZGSNrCqC7DmxucvvflR3fsMy/Wnih3xSpmA3pwCNspfAcIH4fYhmOEdGxX3jEdjqUpC+m0fSxkNAbkIy0diJWirn+WOtBkBcYhsgA8u1igBBUadbO0s0MCPsYcbHFRNw=="},
{"key":"玩偶","name":"👽玩偶哥哥┃4K弹幕","type":3,"api":"csp_WoGG","searchable":1,"quickSearch":1,"changeable":0,"ext":{"Cloud-drive":"tvfan/Cloud-drive.txt","from":"4k|auto","siteUrl":"https://www.wogg.link/","danMu":"弹"}},
{"key":"蛋蛋","name":"🍓蛋蛋┃多线","type":3,"api":"csp_Cddys","timeout":15,"playerType":2,"searchable":1,"quickSearch":1,"changeable":1},
{"key":"追风","name":"🍊追风┃采集","type":1,"api":"http://www.zfsp.cc/api.php/provide/vod","searchable":1,"filterable":1,"changeable":1,"timeout":10,"jar":"https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1725241709759/okpng.txt;md5;69c0dc9473ef7184b564d79884406f7a"},
{
"key":"火狐",
"name":"🦊茶杯狐",
"type":1,
"api":"https://hhzyapi.com/api.php/provide/vod/",
"searchable":1,
"quickSearch":0,
"filterable":1,
"categories":[
"内地剧",
"动作片",
"科幻片",
"战争片",
"喜剧片",
"爱情片",
"恐怖片",
"犯罪片",
"剧情片",
"冒险片",
"记录片",
"韩剧",
"香港剧",
"台湾剧",
"欧美剧",
"日剧",
"马泰剧",
"体育赛事",
"综艺",
"动画片",
"中国动漫",
"日本动漫",
"欧美动漫"
]
},
 {
      "key": "光速资源",
      "name": "光速资源-K",
      "type": 1,
      "api": "http://api.guangsuapi.com/api.php/provide/vod/",
      "searchable": 1,
      "changeable": 1,
      "categories": [
        "大陆剧",
        "动作片",
        "喜剧片",
        "爱情片",
        "科幻片",
        "剧情片",
        "恐怖片",
        "战争片",
        "动漫电影",
        "欧美剧",
        "港澳剧",
        "韩剧",
        "日剧",
        "台湾剧",
        "泰剧",
        "综艺",
        "动漫",
        "记录片"
      ]
    },
   
{
      "key": "索尼资源",
      "name": "索尼资源-A",
      "type": 1,
      "api": "https://suoniapi.com/api.php/provide/vod/from/snm3u8/",
       "searchable": 1,
      "quickSearch": 1,
      "categories": [
      
        "国产剧",
        "欧美剧",
        "韩剧",
        "日剧",
        "港剧",
        "台剧",
        "泰剧",
        "海外剧",
        "纪录片",
        "大陆综艺",
        "日韩综艺",
        "港台综艺",
        "欧美综艺",
        "国产动漫",
        "日韩动漫",
        "欧美动漫",
        "动画片",
        "港台动漫",
        "海外动漫",
        "演唱会",
        "体育赛事",
        "篮球",
        "足球",
        "预告片",
        "斯诺克",
        "影视解说"
     ]
},
{"key":"大米星球","name":"🌌大米┃星球┃蓝光","type":3,"api":"csp_AppDaMi","jar":"http://我不是.摸鱼儿.top/by/jar/xpbq.php","searchable":1,"quickSearch":1,"filterable":1},

{"key":"Ikun资源","name":"🐔Ikun资源(切片)","type":0,"api":"https://ikunzyapi.com/api.php/provide/vod/at/xml/","searchable":1,"quickSearch":1},
{"key":"nangua","name":"🎃┃南瓜┃影视","type":3,"playerType":"2","api":"http://dt.xn--yety82d.love/js/lib/drpy2.min.js","ext":"http://dt.xn--yety82d.love/js/南瓜.js"},
//fm
{"key":"csp_Nongm","name":"🌾️┃农民┃影视","type":3,"api":"csp_Nongm","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"csp_Quanwk","name":"🗺️️┃全网┃影视","type":3,"api":"csp_Quanwk","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"csp_SuBaiBai","name":"🏳️┃素白┃影视","type":3,"api":"csp_SuBaiBai","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"csp_Zx1080","name":"👰┃最新┃影视","type":3,"api":"csp_Zx1080","playerType":2,"jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"csp_Ikan","name":"💕┃爱看┃影视","type":3,"api":"csp_Ikan","playerType":2,"jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},

{"key":"csp_Taozi","name":"🍑┃桃子┃影视","type":3,"api":"csp_Taozi","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"哔嘀","name":"😹┃哔嘀┃影视","type":3,"api":"csp_Bdys","searchable":1,"quickSearch":1,"filterable":1,"jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"csp_FengGo","name":"🐕┃疯狗┃影视","type":3,"api":"csp_FengGo","playerType":2,"jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},

{"key":"csp_Vidhub2","name":"🎼┃Vid┃影视","type":3,"api":"csp_Vidhub2","searchable":1,"quickSearch":1,"filterable":1,"jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"比特","name":"✌️️┃比特┃影视","type":3,"api":"csp_Bttwo","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"csp_Juqq","name":"⭕┃剧圈┃影视","type":3,"playerType":"2","api":"csp_Juqq","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"荐片","name":"🎬┃荐片┃影视","api":"csp_Jianpian","type":3,"playerType":"2","ext":"http://api2.rinhome.com","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},


{"key":"FreeOK","name":"️️👌┃Fre┃影视","type":3,"api":"http://dt.xn--yety82d.love/js/lib/drpy2.min.js","ext":"http://dt.xn--yety82d.love/js/FreeOK.js"},
{"key":"哔嘀","name":"️️💦┃哔嘀┃影视","type":3,"api":"csp_Bdys","searchable":1,"quickSearch":1,"filterable":1,"playerType":"1","jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"毛驴","name":"🦙┃毛驴┃影视","type":3,"api":"csp_MaoLv","searchable":1,"quickSearch":1,"filterable":1,"jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{"key":"兄弟","name":"👯┃兄弟┃影视","type":3,"api":"csp_Xdys","searchable":1,"quickSearch":1,"filterable":1,"jar":"http://happy.xn--z7x900a.com/jar/PandaQ240805.jar;md5;7f69a60f49cba319a30896e6681c798a"},
{
            "key": "天天",
            "name": "天天-E",
            "type": 3,
            "api": "csp_TTian",
            "playerType": 2,
            "ext": "http://op.ysdqjs.cn",
            "jar": "https://gitee.com/langli-little-white-dragon-1/little-white-dragon/raw/master/lib/spider.jar"
        },

// 巧计
{"key":"鸣人","name":"鸣人┃直连","type":1,"api":"https://json.heimuer.xyz/api.php/provide/vod/?ac=list","searchable":1,"quickSearch":1,"filterable":0,"playerType":2},

{"key":"木叶","name":"木叶┃App","type":3,"api":"csp_Muye","playerType":1,"ext":"cMS4wLjl8aHR0cDovLzExMy40NS4xMzUuMTAwOjYxMTB8NWNlOGJmYTB8MTAwOXw1Njg2ODU0MzRGRUM3QzhDMjkwQUU0RkIzMjVGRjEzMHxzaGlqaWVtYW90dnw3NjU0ODdmNmIzODY2ODI4","jar":"http://cdn.qiaoji8.com/fix24914.jar;md5;df8acabafdc6aa94c11ecb3da25188e1"},

{"key":"柠檬","name":"柠檬2┃App","type":3,"api":"csp_Nmvod","playerType":1,"ext":"eaHR0cHM6Ly9hcGkuY25tY29tLmNvbS93ZWJjbG91ZC9yZWxheS5waHA/dXJsPQ==","jar":"http://cdn.qiaoji8.com/fix24914.jar;md5;df8acabafdc6aa94c11ecb3da25188e1"},
{"key":"柠檬","name":"柠檬┃App","type":3,"api":"csp_Nmvod","playerType":2,"ext":"https://api.cnmcom.com/webcloud/relay.php?url=","jar":"http://cdn.qiaoji8.com/fix24914.jar;md5;df8acabafdc6aa94c11ecb3da25188e1"},
{"key":"热播","name":"热播┃App","type":3,"api":"csp_TTian","playerType":2,"ext":"http://v.rbotv.cn","jar":"http://cdn.qiaoji8.com/fix24914.jar;md5;df8acabafdc6aa94c11ecb3da25188e1"},
{"key":"AI1","name":"AI1┃仅搜索","type":3,"api":"csp_AI","searchable":1,"quickSearch":1,"filterable":0,"playerType":2,"ext":"http://124.222.116.5/macos/seven/api.php/provide/vod/|okhttp/4.9.1|https://jx.kuaizi.cc","jar":"http://cdn.qiaoji8.com/fix24914.jar;md5;df8acabafdc6aa94c11ecb3da25188e1"},
{"key":"AI2","name":"AI2┃仅搜索","type":3,"api":"csp_AI","searchable":1,"quickSearch":1,"filterable":0,"playerType":2,"ext":"http://124.222.116.5/mb/api.php/provide/vod/|Mozilla/5.0(Macintosh;IntelMacOSX10_15_7)AppleWebKit/537.36(KHTML,likeGecko)Chrome/119.0.0.0Safari/537.33|qiaoji","jar":"http://cdn.qiaoji8.com/fix24914.jar;md5;df8acabafdc6aa94c11ecb3da25188e1"},
{"key":"AI3","name":"AI3┃仅搜索","type":3,"api":"csp_AI","searchable":1,"quickSearch":1,"filterable":0,"playerType":2,"ext":"http://124.222.30.115/mb/api.php/provide/vod/|okhttp/4.9.1|qiaoji","jar":"http://cdn.qiaoji8.com/fix24914.jar;md5;df8acabafdc6aa94c11ecb3da25188e1"},
{
            "key": "机器人",
            "name": "机器人",
            "type": 3,
            "api": "csp_Ikanbot",
            "searchable": 1,
            "quickSearch": 1,
            "changeable": 1,
            "ext": "https://v.aikanbot.com"
        ,"jar":"https://gitee.com/langli-little-white-dragon-1/little-white-dragon/raw/master/lib/spider.jar"},
{
            "key": "快看影视",
            "name": "快看影视",
            "type": 3,
            "api": "csp_Kuaikan",
            "searchable": 1,
            "quickSearch": 1,
            "filterable": 1
         ,"jar":"https://gitee.com/langli-little-white-dragon-1/little-white-dragon/raw/master/lib/spider.jar"},
//OK

{"key":"csp_QuPanSou","name":"🤓趣盘搜┃搜索","type":3,"api":"csp_QuPanSou","searchable":1,"filterable":1,"changeable":0,"ext":{"cookie":"file://TV/quark_cookie.txt","danmu":true},
"timeout":15,"jar":"https://jihulab.com/okcaptain/kko/-/raw/main/okpng.txt;md5;8bd0b890a77e39f16bab73a962ca14a8"},
{"key":"csp_Qkpanso","name":"🐚夸克盘搜┃搜索","type":3,"api":"csp_Qkpanso","searchable":1,"filterable":1,"changeable":0,"ext":{"cookie":"file://TV/quark_cookie.txt","danmu":true},
"timeout":15,"jar":"https://jihulab.com/okcaptain/kko/-/raw/main/okpng.txt;md5;8bd0b890a77e39f16bab73a962ca14a8"},

{
"key":"鑫影视",
"name":"🐼┃鑫鑫┃影视",
"type":3,
"api":"csp_AppYsV2",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"http://yingszj.xn--654a.cc/api.php/app/"
},
{"key":"Lib","name":"🌟立播┃直连","type":3,"api":"csp_Libvio","timeout":15,"searchable":1,"quickSearch":1,"changeable":1,"ext":"https://www.libvio.pw/"},


{
"key":"csp_Bttoo",
"name":"🍄比特┃直连",
"type":3,
"api":"csp_Bttwoo",
"searchable":1,
"quickSearch":1,
"changeable":1
},
{
"key":"Lib",
"name":"🌟利播┃直连",
"type":3,
"api":"csp_Libvio",
"searchable":1,
"quickSearch":1,
"changeable":1,
"ext":"https://www.libvio.pro/"
},


{"key":"6V磁力","name":"🧲6V磁┃4K","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://weixine.net/sub/6v.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ231013.jar"},
{"key":"csp__电影港","name":"🧲电影港(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_%E7%94%B5%E5%BD%B1%E6%B8%AF.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ231013.jar"},
{"key":"4KHDR","name":"🧲HDR磁┃4K","type":3,"api":"csp_XYQHikerAL","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://weixine.net/sub/4KHDR.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ231013.jar"},
{
"key":"索尼资源",
"name":"📀┃索尼┃影视",
"type":1,
"api":"https://suoniapi.com/api.php/provide/vod/from/snm3u8/",
"categories":[
"动作片",
"喜剧片",
"爱情片",
"科幻片",
"恐怖片",
"剧情片",
"战争片",
"国产剧",
"欧美剧",
"韩剧",
"日剧",
"港剧",
"台剧",
"泰剧",
"海外剧",
"纪录片",
"大陆综艺",
"日韩综艺",
"港台综艺",
"欧美综艺",
"国产动漫",
"日韩动漫",
"欧美动漫",
"动画片",
"港台动漫",
"海外动漫",
"演唱会"
],
"searchable":1,
"quickSearch":1
},
{
"key":"畅梦",
"name":"💤┃畅梦┃影视",
"type":3,
"api":"http://cf.weixine.net/js/lib/drpy2.min.js",
"ext":"http://cf.weixine.net/js/changmeng.js"
},
{"key":"csp_AliPS","name":"📀喵狸盘搜(搜索)","type":3,"api":"csp_AliPS","playerType":1,"searchable":1,"quickSearch":1,"filterable":0,"ext":"https://gitee.com/TLX212/tlx-jk/raw/master/token.txt","jar":"https://download.kstore.space/download/3051/JAR/XYQ231013.jar"},
{"key":"Gitcafe","name":"📀小纸条(搜索)","type":3,"api":"csp_Gitcafe","playerType":1,"searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitee.com/TLX212/tlx-jk/raw/master/token.txt","jar":"https://download.kstore.space/download/3051/JAR/XYQ231013.jar"},






{
"key":"cjzy_暴风资源",
"name":"🎈┃暴风┃影视",
"type":1,
"api":"https://bfzyapi.com/api.php/provide/vod/?ac=list",
"playUrl":"",
"categories":[
"国产剧",
"国产动漫",
"大陆综艺",
"港台综艺",
"香港剧",
"台湾剧",
"日本剧",
"欧美剧",
"泰国剧",
"日本动漫",
"日本综艺",
"综艺频道",
"新马泰综艺",
"纪录片",
"科幻片",
"喜剧片",
"战争片"
]
},
{
"key":"虎牙",
"name":"🐯虎牙采集",
"type":1,
"api":"https://www.huyaapi.com/api.php/provide/vod/from/hym3u8",
"searchable":1,
"quickSearch":1,
"categories":[
"内地剧",
"动作片",
"科幻片",
"战争片",
"喜剧片",
"爱情片",
"恐怖片",
"犯罪片",
"剧情片",
"冒险片",
"记录片",
"韩剧",
"香港剧",
"台湾剧",
"欧美剧",
"日剧",
"马泰剧",
"体育赛事",
"综艺",
"动画片",
"中国动漫",
"日本动漫",
"欧美动漫"
]
},


{"key":"Biliych","name":"🅱哔哔┃歌曲","type":3,"api":"csp_Bili","style":{"type":"rect","ratio":1.597},"searchable":1,"quickSearch":0,"changeable":0,"ext":"https://www.agit.ai/fantaiying/fty/raw/branch/master/json/biliych.json"},

//云盘资源※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{"key":"YiSo","name":"😹易搜┃搜索","type":3,"api":"csp_YiSo","searchable":1,"quickSearch":1,"changeable":0,"ext":"http://127.0.0.1:9978/file/tvfan/token.txt+4k|auto|fhd"},
{"key":"Zhaozy","name":"🐺找资源┃搜索","type":3,"api":"csp_Zhaozy","searchable":1,"quickSearch":1,"changeable":0,"ext":"http://127.0.0.1:9978/file/tvfan/token.txt+4k|auto|fhd$$$zhaoziyuan777$$$qqq111"},
{"key":"PanSou","name":"🦊盘搜┃搜索","type":3,"api":"csp_PanSou","searchable":1,"quickSearch":1,"changeable":0,"ext":"http://127.0.0.1:9978/file/tvfan/token.txt+4k|auto|fhd"},
{"key":"UpYun","name":"😻Up搜┃搜索","type":3,"api":"csp_UpYun","searchable":1,"quickSearch":1,"changeable":0,"ext":"http://127.0.0.1:9978/file/tvfan/token.txt+4k|auto|fhd"},
{"key":"PanSearch","name":"🙀盘Se┃搜索","type":3,"api":"csp_PanSearch","searchable":1,"quickSearch":1,"changeable":0,"ext":"http://127.0.0.1:9978/file/tvfan/token.txt+4k|auto|fhd"},
{"key":"push_agent","name":"🛴手机┃推送","type":3,"api":"csp_Push","searchable":0,"quickSearch":0,"ext":"http://127.0.0.1:9978/file/tvfan/token.txt+4k|auto|fhd"},

//XYQHiker规则※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{"key":"XYQH_达达龟","name":"🌐达达龟(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_达达龟.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_圣城","name":"🌐圣城影视(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_圣城影视.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_素白","name":"🌐素白白影视(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_%E7%B4%A0%E7%99%BD%E7%99%BD%E5%BD%B1%E8%A7%86.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_6V影","name":"🌐6V影视(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_6v%E5%BD%B1%E8%A7%86.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_万能","name":"🌐万能影视(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/WNYS.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_耐看","name":"️🌐耐看影视(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":0,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_%E8%80%90%E7%9C%8B.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_看了","name":"🌐看了么(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_%E7%9C%8B%E4%BA%86%E4%B9%88.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_独播","name":"🌐独播库(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_%E7%8B%AC%E6%92%AD%E5%BA%93%E8%93%9D%E5%85%89.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_333y","name":"🌐333影视(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/xyqh_333%E5%BD%B1%E8%A7%86.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},
{"key":"XYQH_磁力","name":"🌐电影港磁力(XYQH)","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XYQHiker/XYQ_%E7%94%B5%E5%BD%B1%E6%B8%AF%EF%BC%88%E7%A3%81%E5%8A%9B%EF%BC%89.json","jar":"https://download.kstore.space/download/3051/JAR/XYQ-原画在前0615.jar;md5;B880BBAD2845D16CFB86CCA0331B2621"},

//XBP规则※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{"key":"xbpq_石榴","name":"️🌟石榴影院(XBPQ)","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XBPQ/xbpq_%E7%9F%B3%E6%A6%B4%E7%94%B5%E5%BD%B1.json","jar":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XBPQ/xBPQ_1107.jar"},
{"key":"xbpq_先生","name":"️🌟电影先生(XBPQ)","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":0,"filterable":0,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XBPQ/xbpq_%E7%94%B5%E5%BD%B1%E5%85%88%E7%94%9F.json","jar":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XBPQ/xBPQ_1107.jar"},
{"key":"xbpq_FREE","name":"️🌟FREEOK(XBPQ)","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"ext":"{\"免嗅\":\"1\",\"播放标题\":\"span>&&<\",\"副标题\":\"class=\\\"module-item-note\\\">&&</div>\",\"线路数组\":\"class=\\\"module-tab-itemtab-item&&</div>\",\"线路标题\":\"<span>&&</span>\",\"播放数组\":\"class=\\\"module-play-list&&</div>\",\"分类\":\"剧集$2#电影$1#综艺$4#动漫$3\",\"分类url\":\"https://www.freeok.vip/vodshow/{cateId}--------{catePg}---/\"}","jar":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XBPQ/xBPQ_1107.jar"},
{"key":"xBPQ_子子","name":"🌟子子影视(XBPQ)","type":3,"api":"csp_xBPQ","searchable":1,"quickSearch":1,"filterable":0,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XB/zzys.json","jar":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XBPQ/xBPQ_1107.jar"},

//直播资源※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{"key":"csp_Yj1211","name":"📽️网红直播┃SP","type":3,"api":"csp_Yj1211","searchable":1,"quickSearch":1,"filterable":1},
//XB规则※※※※※※※※※※※※※※※※※※※※※※※※※※※※

{"key":"XB__2345","name":"🐙2345影视(XB)","type":3,"api":"csp_XBiubiu","searchable":1,"quickSearch":1,"filterable":0,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XB/2345%E5%BD%B1%E8%A7%86%E5%A4%A7%E5%85%A8.json","jar":"https://download.kstore.space/download/3051/1080%E5%93%94%E5%93%A9.jar;md5;C4BA98711FAC35DAFF17780D0817F5DC"},
{"key":"xbi_lxys","name":"🎂冷曦影视(XBi)","type":3,"api":"csp_XBiu","searchable":1,"quickSearch":1,"filterable":0,"ext":"https://www.lenxitv.cc/t/{cateId}-{catePg}.html","jar":"https://download.kstore.space/download/3051/1080%E5%93%94%E5%93%A9.jar;md5;C4BA98711FAC35DAFF17780D0817F5DC"},

//道长规则※※※※※※※※※※※※※※※※※※※※※※※※※※※※

{
"key":"drpy_8号_","name":"🥋8号影院[DRPY]",
"type":3,
"api":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/JS/lib/drpy.min.js",
"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/JS/js/8%E5%8F%B7%E5%BD%B1%E9%99%A2.js"
},
{
"key":"drpy异世界","name":"🥋异世界动漫[DRPY]",
"type":3,
"api":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/JS/lib/drpy.min.js",
"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/JS/js/%E5%BC%82%E4%B8%96%E7%95%8C%E5%8A%A8%E6%BC%AB.js"
},


//XP规则※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{"key":"xpa_tvb0","name":"🌬蓝光TVB(XPF)","type":3,"api":"csp_XPathFilter","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitlab.com/zyk212/tlx-lab/-/raw/master/XP/tvyb03.json"},

//解析资源※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{"key":"api_飞速","name":"👓飞速资源","type":1,"api":"https://www.feisuzyapi.com/api.php/provide/vod/","searchable":1,"quickSearch":1},

//动漫※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{
"key":"csp_Dm84",
"name":"🚌动漫巴士SP",
"type":3,
"api":"csp_Dm84",
"searchable":1,
"quickSearch":1,
"filterable":1
},
{
"key":"csp_Ying",
"name":"💮樱花动漫SP",
"type":3,
"api":"csp_Ying",
"searchable":1,
"quickSearch":1,
"filterable":1
},
{
"key":"csp_Ysj",
"name":"🎀异界动漫SP",
"type":3,
"api":"csp_Ysj",
"searchable":1,
"quickSearch":1,
"filterable":1
},
{
"key":"csp_Anime1",
"name":"🐾日本动漫SP",
"type":3,
"api":"csp_Anime1",
"searchable":1,
"quickSearch":1,
"filterable":1
},

//切片资源※※※※※※※※※※※※※※※※※※※※※※※※※※※※
{"key":"百度资源","name":"🔪百度资源(切)","type":1,"api":"https://api.apibdzy.com/api.php/provide/vod/","searchable":1,"filterable":0,"categories":["国产动漫","日韩动漫","大陆剧","欧美剧","韩剧","日剧","动作片","喜剧片","爱情片","科幻片","恐怖片","剧情片","战争片"]},


//官采资源※※※※※※※※※※※※※※※※※※※※※※※※※※※※



{
"key":"9413e990-b6a3-5a3f-b2cb-57ca66aaa155",
"name":"暴风|切片",
"api":"https://bfzyapi.com/api.php/provide/vod/",
"download":"",
"playUrl":"",
"group":"影视",
"search":2,
"status":true,
"isActive":true,
"type":1,
"id":4
},




{"key":"快看","name":"快看采集","type":1,"api":"https://kuaikan-api.com/api.php/provide/vod/from/kuaikan/","playerType":2,"searchable":1,"quickSearch":1,"categories":["国产剧","动作片","科幻片","战争片","喜剧片","爱情片","恐怖片","犯罪片","剧情片","冒险片","记录片","韩剧","香港剧","台湾剧","欧美剧","日本剧","新马剧","国产综艺","动画电影","国产动漫","日本动漫","欧美动漫"]},
{"key":"N","name":"解析+N","type":3,"api":"csp_AppYsV2","changeable":0,"searchable":1,"quickSearch":1,"filterable":1,"ext":"https://www.kuin.one/api.php/app/"},
{"key":"我是底线","name":"-❌我是底线❌-","type":4,"api":"https://t4.secan.icu/vod","searchable":1,"quickSearch":1,"filterable":1,"ext":"","jar":""}
],


//解析规则※※※※※※※※※※※※※※※※※※※※※※※※※※※※
"parses":[
{"name":"卡顿换解析","type":3,"url":"Demo"},
{"name":"Web聚合","type":3,"url":"Web"},
{"name":"解析>>>","type":2,"url":"Sequence"},
//{"name":"[并发]","type":2,"url":"Parallel"},
{"name":"ckp","type":0,"url":"https://www.ckplayer.vip/jiexi/?url="},
{"name":"肥猫小鱼","type":1,"url":"http://json.84jia.com/home/api?type=ys&uid=335253&key=demprsyzBMQRVY0234&url="},
{"name":"小鱼解析Z","type":1,"url":"http://json.84jia.com/home/api?type=ys&uid=1188400&key=abdegjlmwACEMQZ179&url="},

{"name":"夜幕","type":0,"url":"https://www.yemu.xyz/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"],"header":{"User-Agent":"okhttp/4.1.0"}}},
{"name":"m3tv","type":0,"url":"https://jx.m3u8.tv/jiexi/?url=","header":{"User-Agent":"okhttp/3.12.0"}},
{"name":"解壹","type":0,"url":"https://jx.jsonplayer.com/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","xigua"]}},
{"name":"稳定","type":0,"url":"https://jx.bozrc.com:4433/player/?url=","header":{"User-Agent":"Mozilla/5.0"}},
{"name":"B站","type":0,"url":"https://chaxun.truechat365.com/?url=","ext":{"flag":["bilibili","哔哩哔哩","哔哩"]}},
{"name":"看看","type":0,"url":"https://jx.m3u8.pw/?url=","header":{"User-Agent":"Mozilla/5.0"},"ext":{"flag":["qq","腾讯","qiyi","imgo","爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","leshi","bilibili","哔哩哔哩","哔哩","mgtv","芒果","sohu","xigua","fun","风行"]}},
{"name":"爱酷","type":0,"url":"https://jx.zhanlangbu.com/?url="},
{"name":"八仟","type":0,"url":"http://mz_llq.8kvod.com/player/?url=","header":{"User-Agent":"Mozilla/5.0"}},
{"name":"速云","type":0,"url":"http://w.h100.top/jxhx/jx/?url=","header":{"User-Agent":"Mozilla/5.0"}},
{"name":"巨人","type":0,"url":"https://jx.tudo.fun/?url=","header":{"User-Agent":"Mozilla/5.0"}},
{"name":"OK综","type":0,"url":"https://okjx.cc/?url="},
{"name":"虾米","type":0,"url":"https://jx.xmflv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","imgo","rx","ltnb","bilibili","1905","xigua"]}},
{"name":"YuMi-vip🥭","type":0,"url":"https://jx.xmflv.com/?url=","ext":{"flag":["爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","leshi","bilibili","哔哩哔哩","哔哩","mgtv","芒果","芒果"],"header":{"User-Agent":"Mozilla/5.0(Linux;Android6.0;Nexus5Build/MRA58N)AppleWebKit/537.36(KHTML,likeGecko)Chrome/118.0.0.0MobileSafari/537.36"}}},
{"name":"亮亮🌾","type":1,"url":"http://xiutan.shiyifacai.com/json/qingfeng.php?url=","ext":{"flag":["seven"],"header":{"User-Agent":"Lavf/58.12.100"}}},
{"name":"神秘的哥哥们","type":1,"url":"http://api.888484.xyz/神秘哥哥/super.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","tucheng","sohu","搜狐","letv","乐视","mgtv","芒果","tnmb","seven","yzm","aliyun","RJuMao","bilibili","1905","xinvip","XAL","qiqi","XALS","YuMi-vip"]}},
{"name":"解析01","type":1,"url":"https://svip.znjson.com/api/?key=c3d07985b57effbbf0e9d8bd66b85192&url=","ext":{"flag":["qq","腾讯","youku","优酷","mgtv","芒果","xigua"]}},
{"name":"bcy","type":1,"url":"https://xs.bcyingshi.ink/?url="},
{"name":"莫问","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url="},
{"name":"左岸🌾","type":1,"url":"https://api.tyun77.cn/api.php/provide/parseDicturl?url=","ext":{"flag":["爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","leshi","bilibili","哔哩哔哩","哔哩","mgtv","芒果","芒果"],"header":{"User-Agent":"okhttp/3.12.0"}}},
{"name":"饭团0","type":0,"url":"https://www.fantuantva.com/jiexi/jiexi-gf/?url="},
{"name":"饭团1","type":0,"url":"https://www.fantuantva.com/jiexi/jiekou-1/?url="},
{"name":"饭团2","type":0,"url":"https://www.fantuantva.com/jiexi/jiekou-2/?url="},
{"name":"饭团3","type":0,"url":"https://www.fantuantva.com/jiexi/jiekou-3/?url="},
{"name":"饭团4","type":0,"url":"https://www.fantuantva.com/jiexi/jiekou-4/?url="},
{"name":"JY视频","type":0,"url":"https://jx.we-vip.com/?url="},
{"name":"jxjson","type":0,"url":"https://jxjson.cf/?url="},
{"name":"PYM3U8","type":0,"url":"https://www.playm3u8.cn/jiexi.php?url="},
{"name":"playerjy","type":0,"url":"https://jx.playerjy.com/?url="},
{"name":"M1907","type":0,"url":"https://z1.m1907.top/?jx="},
{"name":"555","type":0,"url":"https://jiexi.555jiexi.net:555/player/?url="},
{"name":"cxk8","type":0,"url":"https://dm.cxk8.com/player/?url="},
{"name":"——底线——","type":2,"url":"Parallel"}
],


"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu","bilibili","renrenmi"],
"ijk":[
{"group":"软解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":1,"name":"fflags","value":"fastseek"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"0"},
{"category":4,"name":"mediacodec-auto-rotate","value":"0"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"0"},
{"category":4,"name":"mediacodec-hevc","value":"0"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}
]},
{"group":"硬解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":1,"name":"fflags","value":"fastseek"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"1"},
{"category":4,"name":"mediacodec-auto-rotate","value":"1"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"1"},
{"category":4,"name":"mediacodec-hevc","value":"1"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}
]}
],
"ads":["wan.51img1.com","iqiyi.hbuioo.com","vip.ffzyad.com","https://lf1-cdn-tos.bytegoofy.com/obj/tos-cn-i-dy/455ccf9e8ae744378118e4bd289288dd","mimg.0c1q0l.cn","www.googletagmanager.com","www.google-analytics.com","mc.usihnbcq.cn","mg.g1mm3d.cn","mscs.svaeuzh.cn","cnzz.hhttm.top","tp.vinuxhome.com","cnzz.mmstat.com","www.baihuillq.com","s23.cnzz.com","z3.cnzz.com","c.cnzz.com","stj.v1vo.top","z12.cnzz.com","img.mosflower.cn","tips.gamevvip.com","ehwe.yhdtns.com","xdn.cqqc3.com","www.jixunkyy.cn","sp.chemacid.cn","hm.baidu.com","s9.cnzz.com","z6.cnzz.com","um.cavuc.com","mav.mavuz.com","wofwk.aoidf3.com","z5.cnzz.com","xc.hubeijieshikj.cn","tj.tianwenhu.com","xg.gars57.cn","k.jinxiuzhilv.com","cdn.bootcss.com","ppl.xunzhuo123.com","xomk.jiangjunmh.top","img.xunzhuo123.com","z1.cnzz.com","s13.cnzz.com","xg.huataisangao.cn","z7.cnzz.com","xg.huataisangao.cn","z2.cnzz.com","s96.cnzz.com","q11.cnzz.com","thy.dacedsfa.cn","xg.whsbpw.cn","s19.cnzz.com","z8.cnzz.com","s4.cnzz.com","f5w.as12df.top","ae01.alicdn.com","www.92424.cn","k.wudejia.com","vivovip.mmszxc.top","qiu.xixiqiu.com","cdnjs.hnfenxun.com","cms.qdwght.com"]
}
