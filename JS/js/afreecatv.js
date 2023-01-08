// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// drpy安卓本地搭建说明 https://gitcode.net/qq_32394351/dr_py/-/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// Pluto Player官方TG https://t.me/PlutoPlayer
// Pluto Player官方TG https://t.me/PlutoPlayerChannel

var rule = {
    title:'afreecatv',
    host:'https://www.afreecatv.com/?hash=bora',
    homeUrl:'',//网站的首页链接,用于分类获取和推荐获取
	url:'/?pg=fypage&class=fyclass',
    class_name:'全部',
    class_url:'2_208',
    detailUrl:'/fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/japi/search/api/searchShow?kw=**&page=fypage&pageSize=20',
    searchable:2,
    quickSearch:0,
    headers:{
		'User-Agent':'PC_UA'
	},
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:'',
    double:true,
	推荐:'json:data.list;room;*;cover;*;*',
	一级:'json:data.rl;rn;rs16;nn;rid',
    二级:'*',
    搜索:'json:data.relateShow;roomName;roomSrc;nickName;*',
}
