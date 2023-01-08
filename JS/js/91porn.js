var rule = {
    title:'18av',
    host:'https://mi7k0h.9se102.com/',
    url:'/zh/fyclass/all/fypage.html',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'最近更新&高清视频&最近加精&当前最热',
    class_url:'latest&hd&recent-favorite&hot-list',
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.posts div;.meta&&Text;img&&src;.top&&Text;a&&href',
    二级:'*',
}
