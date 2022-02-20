/**************************************************
 * MKOnlinePlayer v2.32
 * 播放列表配置模块
 * 编写：mengkun(http://mkblog.cn)
 * 时间：2017-9-15
 *************************************************/
// 建议修改前先备份一下
// 获取 歌曲的网易云音乐ID 或 网易云歌单ID 的方法：
// 先在 js/player.js 中开启调试模式，然后按 F12 打开浏览器的控制台。播放歌曲或点开歌单即可看到相应信息

var musicList = [
    // 以下三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    // 预留列表：搜索结果
    {
        name: "搜索结果",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：正在播放
    {
        name: "正在播放",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：播放历史
    {
        name: "播放历史",   // 播放列表名字
        cover: "images/history.png",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },  
	{
        name: "收藏夹",   // 播放列表名字
        cover: "images/My-Favorites.png", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: []                // 这里面放歌曲
        // 列表中最后一首歌大括号后面不要加逗号
    },
    // 以上三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    //*********************************************
    // 自定义列表开始，您可以自由添加您的自定义列表
    {
        id: 3778678     // 云音乐热歌榜
    },
    {
        id: 3779629     // 云音乐新歌榜
    },
/*
    {
        id: 4395559     // 华语金曲榜
    },
    */
     /**********
    {
        id: 64016     // 中国TOP排行榜（内地榜）
    },
    {
        id: 112504     // 中国TOP排行榜（港台榜）
    },
  *********/
    {
        id: 3136952023     // 云音乐私人雷达 | 根据听歌记录为你打造
    },

    {
        id: 2838851802     // "网易云我喜欢的"
    },

    // 自定义列表教程开始！
    // 方式一：手动创建列表并添加歌曲信息
    // 温馨提示：各大音乐平台获取到的外链有效期均较短，因此 url 值应该设置为空，以让程序临时抓取
    {
        name: "我收录的歌单",   // 播放列表名字
        cover: "http://music.scqianguyun.cn/images/me_music.jpg", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
          {id:"004dSBD80Ecba6",name:"你爱我坏",artist:"小鬼阿秋",album:"你爱我坏",pic_id:"004PIe5M4UyraS",url_id:"004dSBD80Ecba6",lyric_id:"004dSBD80Ecba6",source:"tencent",url: "",pic: ""},

           {
                id: "436514312",  // 音乐ID
                name: "成都",  // 音乐名字
                artist: "赵雷", // 艺术家名字
                album: "成都",    // 专辑名字
                source: "netease",     // 音乐来源
                url_id: "436514312",  // 链接ID
                pic_id: "2946691234868155",  // 封面ID
                lyric_id: "436514312",  // 歌词ID
                pic: "https://p3.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",    // 专辑图片
                url: ""   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "65528",
                name: "淘汰",
                artist: "陈奕迅",
                album: "认了吧",
                source: "netease",      // 网易云
                url_id: "65528",
                pic_id: "18782957139233959",
                lyric_id: "65528",
                pic: "https://p3.music.126.net/BFuOepLmD63tY75UJs1c0Q==/18872017579169120.jpg",
                url: ""
            },
			
          
{"id":1901371647,"name":"孤勇者","artist":"陈奕迅","album":"孤勇者","source":"netease","url_id":1901371647,"pic_id":null,"lyric_id":1901371647,"pic":"http://p4.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg?param=300y300","url":"http://m701.music.126.net/20220101215311/f62603f2229dadff1ce66fb94c26da1e/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11983356173/ed2f/6024/be41/2dc456563c5f9c9535b75ecb066c0325.mp3"},

{"id":1896177187,"name":"米兰的小铁匠","artist":"孟群","album":"New Sing 国语","source":"netease","url_id":1896177187,"pic_id":"109951166632202999","lyric_id":1896177187,"pic":"https://p3.music.126.net/va02ZPHTG4U4xB-pzqHykg==/109951166632202999.jpg?param=300y300","url":"http://m801.music.126.net/20220101215328/8b15d275ce658e0c8bb38bf1f578fd6a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11723181460/254e/80a7/cfec/1b8c4bbd379430a80c0b83ddc2fde579.mp3"},

{"id":1907820140,"name":"洛城","artist":"薛之谦","album":"洛城","source":"netease","url_id":1907820140,"pic_id":null,"lyric_id":1907820140,"pic":"http://p4.music.126.net/P4t1N2LXk6xx8Lypwnm50w==/109951166868647421.jpg?param=300y300","url":"http://m701.music.126.net/20220101215415/3631bcd912e38751a4ff6c5b5fe5968a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/12383504045/b380/2e70/621b/c4b4a9ddd45dfc433f43d7fa363e65ad.mp3"},

{"id":1891469546,"name":"删了吧","artist":"烟(许佳豪)","album":"删了吧","source":"netease","url_id":1891469546,"pic_id":null,"lyric_id":1891469546,"pic":"http://p4.music.126.net/nNg4YjkcK1AwCX1FrN8VOQ==/109951166578333625.jpg?param=300y300","url":"http://m701.music.126.net/20220101215418/e3cafffca7717a3906795801fbba3918/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11469316999/ffab/9a09/92ff/b01c9b0aae5a4aba0c9cc5f306a8ec5d.mp3"},

{"id":1906045793,"name":"漫天星光（纯音乐版）","artist":"CMJ","album":"漫天星光（网易云音乐2021年度听歌报告主题曲）","source":"netease","url_id":1906045793,"pic_id":null,"lyric_id":1906045793,"pic":"http://p3.music.126.net/a2t8hNg8luv2zpdkaJZpPA==/109951166789488656.jpg?param=300y300","url":"http://m801.music.126.net/20220101215425/53d5b8ae2678742df7a268b58fa93ff6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/12273743159/c594/2cbb/a6e0/0a410f072bd7ebe3419d5a996af3bfef.mp3"},

{"id":435996163,"name":"厄加特的少女梦想—英雄联盟版【米兰的小铁匠】","artist":"HelloMedia","album":"厄加特的少女梦想","source":"netease","url_id":435996163,"pic_id":"18201315486667415","lyric_id":435996163,"pic":"https://p3.music.126.net/inM9Ndi2W3pf4QN-f6WB0g==/18201315486667415.jpg?param=300y300","url":"https://music.163.com/song/media/outer/url?id=435996163.mp3"},

{"id":1456890009,"name":"罗生门（Follow）","artist":"梨冻紧","album":"罗生门（Follow）","source":"netease","url_id":1456890009,"pic_id":null,"lyric_id":1456890009,"pic":"http://p3.music.126.net/yN1ke1xYMJ718FiHaDWtYQ==/109951165076380471.jpg?param=300y300","url":"http://m701.music.126.net/20220101215430/216a80b685b4a3970d914dddcc43a439/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11367887619/f0e3/cd4f/1b57/0fbd7f5eb9cdf76d579602b55bb62fdf.mp3"},

{"id":1895330088,"name":"予你","artist":"队长","album":"予你","source":"netease","url_id":1895330088,"pic_id":null,"lyric_id":1895330088,"pic":"http://p3.music.126.net/yxVm_vRFOode6yP67NmMcA==/109951166625738075.jpg?param=300y300","url":"http://m701.music.126.net/20220101215444/37c0b112e5622f1da7877fe6b9121708/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11679156566/9f28/1f62/4a24/866eaa8eff691500812cc777cbd44f48.mp3"},

{"id":1330348068,"name":"起风了","artist":"买辣椒也用券","album":"起风了","source":"netease","url_id":1330348068,"pic_id":null,"lyric_id":1330348068,"pic":"http://p3.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=300y300","url":"http://m7.music.126.net/20220101215448/80fa0437276c9b3dcec8fef0aac851df/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3"},

{"id":441491828,"name":"水星记","artist":"郭顶","album":"飞行器的执行周期","source":"netease","url_id":441491828,"pic_id":null,"lyric_id":441491828,"pic":"http://p4.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg?param=300y300","url":"http://m8.music.126.net/20220101215451/11d3ef67bed06fddc1a24c209dad2445/ymusic/3dd2/3efd/8621/aaf0881569565f9fd2946ad9551ab491.mp3"},

{"id":1907710159,"name":"廿","artist":"王一博","album":"廿","source":"netease","url_id":1907710159,"pic_id":null,"lyric_id":1907710159,"pic":"http://p4.music.126.net/KzvE4NdQZA6ToYlo_pTDLw==/109951166868877236.jpg?param=300y300","url":"http://m701.music.126.net/20220101215539/6f0ba1fe58fe9999c9937c9abdb7994a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/12384861225/b96d/b7a8/a36a/207526de1ff61153b97d85462288860b.mp3"},

{"id":1859245776,"name":"STAY","artist":"The Kid LAROI","album":"STAY","source":"netease","url_id":1859245776,"pic_id":null,"lyric_id":1859245776,"pic":"http://p3.music.126.net/e5cvcdgeosDKTDrkTfZXnQ==/109951166155165682.jpg?param=300y300","url":""},

{"id":1894094482,"name":"漠河舞厅·2022","artist":"柳爽","album":"漠河舞厅·2022","source":"netease","url_id":1894094482,"pic_id":null,"lyric_id":1894094482,"pic":"http://p4.music.126.net/m8BMzRWR53lMu2uaMYV2mA==/109951166609630672.jpg?param=300y300","url":""},

{"id":1842025914,"name":"这世界那么多人","artist":"莫文蔚","album":"这世界那么多人","source":"netease","url_id":1842025914,"pic_id":null,"lyric_id":1842025914,"pic":"http://p3.music.126.net/LOTxqRjFm03VJEOHJbUqMw==/109951165944804127.jpg?param=300y300","url":""},

{"id":1441758494,"name":"晚风","artist":"Copy","album":"晚风","source":"netease","url_id":1441758494,"pic_id":null,"lyric_id":1441758494,"pic":"http://p4.music.126.net/lCblKUB1hLND5FxiVI1_Lw==/109951164919449758.jpg?param=300y300","url":""},

{"id":1867217766,"name":"致你","artist":"yihuik苡慧","album":"致你","source":"netease","url_id":1867217766,"pic_id":null,"lyric_id":1867217766,"pic":"http://p3.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg?param=300y300","url":""},

{"id":28403111,"name":"特别的人","artist":"方大同","album":"危险世界","source":"netease","url_id":28403111,"pic_id":null,"lyric_id":28403111,"pic":"http://p4.music.126.net/RTB72JJJapo01l4XfVDAWQ==/109951166349819975.jpg?param=300y300","url":""},

{"id":1887917182,"name":"浪漫主义","artist":"姜云升","album":"浪漫主义","source":"netease","url_id":1887917182,"pic_id":null,"lyric_id":1887917182,"pic":"http://p4.music.126.net/lFFiY-jvO1ENHtK2bZ6eUw==/109951166531420475.jpg?param=300y300","url":""},

{"id":1440570723,"name":"Normal No More","artist":"TYSM","album":"Normal No More","source":"netease","url_id":1440570723,"pic_id":null,"lyric_id":1440570723,"pic":"http://p3.music.126.net/s3mKaXDECHZlxi43d7bkCA==/109951164905500417.jpg?param=300y300","url":""},

{"id":1886371886,"name":"百年孤寂","artist":"苏玮","album":"百年孤寂","source":"netease","url_id":1886371886,"pic_id":null,"lyric_id":1886371886,"pic":"http://p4.music.126.net/vGsVzlfFMHl4iGy8hfsCyQ==/109951166512617210.jpg?param=300y300","url":""},

{"id":1808492017,"name":"错位时空","artist":"艾辰","album":"错位时空","source":"netease","url_id":1808492017,"pic_id":null,"lyric_id":1808492017,"pic":"http://p4.music.126.net/8C0lwLE88j9ZwLyPQ9a4FA==/109951165595770076.jpg?param=300y300","url":""},

{"id":141290,"name":"门没锁","artist":"品冠","album":"门没锁","source":"netease","url_id":141290,"pic_id":null,"lyric_id":141290,"pic":"http://p4.music.126.net/SLukeaLTFAh96IH3uH6Vrw==/109951166194484563.jpg?param=300y300","url":""},

{"id":1903349476,"name":"坦白","artist":"KnowKnow","album":"坦白","source":"netease","url_id":1903349476,"pic_id":null,"lyric_id":1903349476,"pic":"http://p4.music.126.net/XQmLdnJAZ7WCQ12eginq1g==/109951166726666495.jpg?param=300y300","url":""},

{"id":1827600686,"name":"还是会想你","artist":"林达浪","album":"还是会想你","source":"netease","url_id":1827600686,"pic_id":null,"lyric_id":1827600686,"pic":"http://p3.music.126.net/9FhSEQtMhP-JP3_U84YfWQ==/109951165798773745.jpg?param=300y300","url":""},

{"id":1430583016,"name":"海底","artist":"一支榴莲","album":"海底","source":"netease","url_id":1430583016,"pic_id":null,"lyric_id":1430583016,"pic":"http://p3.music.126.net/YRFYXG6YaJfTyy_mQntS4A==/109951164799337803.jpg?param=300y300","url":""},

{"id":65766,"name":"富士山下","artist":"陈奕迅","album":"What's Going On…?","source":"netease","url_id":65766,"pic_id":null,"lyric_id":65766,"pic":"http://p4.music.126.net/PcJq6i7zMcPgudejdn1yeg==/109951163256302356.jpg?param=300y300","url":""},


{"id":1497588709,"name":"给你呀（又名：for ya）","artist":"蒋小呢","album":"for ya","source":"netease","url_id":1497588709,"pic_id":null,"lyric_id":1497588709,"pic":"http://p4.music.126.net/GI1Ex39x73zBT-1r7_o-sQ==/109951165494781109.jpg?param=300y300","url":""},

{"id":1887139866,"name":"指纹","artist":"杜宣达","album":"指纹","source":"netease","url_id":1887139866,"pic_id":null,"lyric_id":1887139866,"pic":"http://p3.music.126.net/kT4AECoc13oVKLEg_-eFMA==/109951166578436098.jpg?param=300y300","url":""},

{"id":1807799505,"name":"唯一","artist":"告五人","album":"运气来得若有似无","source":"netease","url_id":1807799505,"pic_id":null,"lyric_id":1807799505,"pic":"http://p4.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg?param=300y300","url":""},

{"id":1500569811,"name":"阿拉斯加海湾","artist":"蓝心羽","album":"阿拉斯加海湾","source":"netease","url_id":1500569811,"pic_id":null,"lyric_id":1500569811,"pic":"http://p3.music.126.net/CbWwREaA22LmAv1oOtJt2w==/109951165518862422.jpg?param=300y300","url":""},

{"id":1368754688,"name":"爱人错过","artist":"告五人","album":"我肯定在几百年前就说过爱你","source":"netease","url_id":1368754688,"pic_id":null,"lyric_id":1368754688,"pic":"http://p3.music.126.net/5JLQMl8xASllDubCWb9WHw==/109951164111703663.jpg?param=300y300","url":""},

{"id":1463165983,"name":"天外来物","artist":"薛之谦","album":"天外来物","source":"netease","url_id":1463165983,"pic_id":null,"lyric_id":1463165983,"pic":"http://p3.music.126.net/jOrfzq4tB9ENWQVWLhi3Ag==/109951165591010361.jpg?param=300y300","url":""},

{"id":1857630559,"name":"New Boy","artist":"房东的猫","album":"谁是宝藏歌手 第8期","source":"netease","url_id":1857630559,"pic_id":null,"lyric_id":1857630559,"pic":"http://p3.music.126.net/KkrcSwKbRsd8GuaOHILlxA==/109951166077317301.jpg?param=300y300","url":""},

{"id":1905157827,"name":"人间四季","artist":"尤长靖","album":"人间四季","source":"netease","url_id":1905157827,"pic_id":null,"lyric_id":1905157827,"pic":"http://p4.music.126.net/xJ4gSiT03xCWfawVOp4mgg==/109951166788827406.jpg?param=300y300","url":""},

{"id":1896178370,"name":"簇拥烈日的花","artist":"Morerare音乐","album":"簇拥烈日的花","source":"netease","url_id":1896178370,"pic_id":null,"lyric_id":1896178370,"pic":"http://p3.music.126.net/116yF8yuMGoPCZne_Nb_sQ==/109951166635988818.jpg?param=300y300","url":""},

{"id":1906034595,"name":"凤毛麟角","artist":"薛之谦","album":"凤毛麟角","source":"netease","url_id":1906034595,"pic_id":null,"lyric_id":1906034595,"pic":"http://p4.music.126.net/BOrfP3sIgs3yStLaFykJAQ==/109951166784231378.jpg?param=300y300","url":""},

{"id":465921195,"name":"还是分开","artist":"张叶蕾","album":"还是分开","source":"netease","url_id":465921195,"pic_id":null,"lyric_id":465921195,"pic":"http://p3.music.126.net/tH5FdakJX47uy8mlM0GMWQ==/19218363741925314.jpg?param=300y300","url":""},

{"id":1492584510,"name":"沉沦与遐想","artist":"C.HØPE","album":"沉沦与遐想","source":"netease","url_id":1492584510,"pic_id":null,"lyric_id":1492584510,"pic":"http://p4.music.126.net/7BgLADW7ZJqPizR918S5UQ==/109951166179751996.jpg?param=300y300","url":""},

{"id":1896102097,"name":"神魂颠倒","artist":"邓典","album":"神魂颠倒","source":"netease","url_id":1896102097,"pic_id":null,"lyric_id":1896102097,"pic":"http://p3.music.126.net/p3smRyYoafYHSFH8HDGZSA==/109951166635150668.jpg?param=300y300","url":""},

{"id":1359356908,"name":"晚安","artist":"颜人中","album":"晚安","source":"netease","url_id":1359356908,"pic_id":null,"lyric_id":1359356908,"pic":"http://p4.music.126.net/8N1fsMRm2L5HyZccc6I3ew==/109951164007377169.jpg?param=300y300","url":""},

{"id":1403318151,"name":"把回忆拼好给你","artist":"王贰浪","album":"把回忆拼好给你","source":"netease","url_id":1403318151,"pic_id":null,"lyric_id":1403318151,"pic":"http://p3.music.126.net/CBx2K_jEN3SNWwYztagPPw==/109951164485969446.jpg?param=300y300","url":""},

{"id":1401671455,"name":"Love Is Gone (Acoustic)","artist":"SLANDER","album":"Love Is Gone (Acoustic)","source":"netease","url_id":1401671455,"pic_id":null,"lyric_id":1401671455,"pic":"http://p3.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg?param=300y300","url":""},

{"id":1888915574,"name":"路过人间","artist":"郁可唯","album":"时光音乐会 第1期","source":"netease","url_id":1888915574,"pic_id":null,"lyric_id":1888915574,"pic":"http://p4.music.126.net/b_lFQUHgdaOvuBgf8wMO0w==/109951166557050112.jpg?param=300y300","url":""},

{"id":1907506345,"name":"蝉","artist":"秃子2z","album":"自然","source":"netease","url_id":1907506345,"pic_id":null,"lyric_id":1907506345,"pic":"http://p4.music.126.net/zqlUa9Labn1Wozh_UZvZjQ==/109951166864184735.jpg?param=300y300","url":""},

{"id":569213220,"name":"像我这样的人","artist":"毛不易","album":"平凡的一天","source":"netease","url_id":569213220,"pic_id":null,"lyric_id":569213220,"pic":"http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=300y300","url":""},

{"id":1890494798,"name":"Enemy (from the series Arcane League of Legends)","artist":"Imagine Dragons","album":"Enemy (from the series Arcane League of Legends)","source":"netease","url_id":1890494798,"pic_id":null,"lyric_id":1890494798,"pic":"http://p3.music.126.net/r6QPvpUo6_ur-KKTjIqfrQ==/109951166564435346.jpg?param=300y300","url":""},

{"id":1430319727,"name":"漠河舞厅","artist":"柳爽","album":"1st.星球","source":"netease","url_id":1430319727,"pic_id":null,"lyric_id":1430319727,"pic":"http://p3.music.126.net/BMPeBg8b6wRUofmMcfQ--g==/109951165029361219.jpg?param=300y300","url":""},

{"id":1498015179,"name":"若是明仔载","artist":"曹雅雯","album":"自本","source":"netease","url_id":1498015179,"pic_id":null,"lyric_id":1498015179,"pic":"http://p4.music.126.net/UmmFvDR88QDR3FQeBxPdQQ==/109951165495289744.jpg?param=300y300","url":""},

{"id":1495058484,"name":"茫","artist":"李润祺","album":"茫","source":"netease","url_id":1495058484,"pic_id":null,"lyric_id":1495058484,"pic":"http://p4.music.126.net/ok5Z4QtDLW9MfadKSGOldQ==/109951165563657438.jpg?param=300y300","url":""},

{"id":569200213,"name":"消愁","artist":"毛不易","album":"平凡的一天","source":"netease","url_id":569200213,"pic_id":null,"lyric_id":569200213,"pic":"http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=300y300","url":""},

{"id":1882420127,"name":"问风","artist":"金渔","album":"问风","source":"netease","url_id":1882420127,"pic_id":null,"lyric_id":1882420127,"pic":"http://p4.music.126.net/M1gk3yEHg5TnPlj1-w4Mzw==/109951166466504110.jpg?param=300y300","url":""},

{"id":523250334,"name":"永不失联的爱","artist":"周兴哲","album":"如果雨之后","source":"netease","url_id":523250334,"pic_id":null,"lyric_id":523250334,"pic":"http://p4.music.126.net/ACPwGpJZxmGKnM3rWilemA==/109951163083048605.jpg?param=300y300","url":""},

{"id":1811921555,"name":"星辰大海","artist":"黄霄雲","album":"星辰大海","source":"netease","url_id":1811921555,"pic_id":null,"lyric_id":1811921555,"pic":"http://p4.music.126.net/eRSdB2vIoBHJV7-0Ga3i6g==/109951165641911293.jpg?param=300y300","url":""},

{"id":1878620183,"name":"风吹过八千里","artist":"苏星婕","album":"风吹过八千里","source":"netease","url_id":1878620183,"pic_id":null,"lyric_id":1878620183,"pic":"http://p3.music.126.net/uyaROxGOD7efUbKVM0YCUA==/109951166416881546.jpg?param=300y300","url":""},

{"id":1387581250,"name":"MOM","artist":"蜡笔小心","album":"MOM","source":"netease","url_id":1387581250,"pic_id":null,"lyric_id":1387581250,"pic":"http://p4.music.126.net/ZOkr1NI-WGGRuc5-G_7-CA==/109951164332837488.jpg?param=300y300","url":""},

{"id":1363948882,"name":"世间美好与你环环相扣","artist":"柏松","album":"听闻余生","source":"netease","url_id":1363948882,"pic_id":null,"lyric_id":1363948882,"pic":"http://p3.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?param=300y300","url":""},

{"id":28059417,"name":"他不懂","artist":"张杰","album":"爱，不解释","source":"netease","url_id":28059417,"pic_id":null,"lyric_id":28059417,"pic":"http://p3.music.126.net/mW53BkMgGy37I7yVrUg-aQ==/109951163117902077.jpg?param=300y300","url":""},

{"id":1892583113,"name":"哭泣站台","artist":"王小帅","album":"哭泣站台","source":"netease","url_id":1892583113,"pic_id":null,"lyric_id":1892583113,"pic":"http://p4.music.126.net/c4JKciFMz4kbPMVqUWxsOw==/109951166589959337.jpg?param=300y300","url":""},

{"id":28285910,"name":"岁月神偷","artist":"金玟岐","album":"完美世界","source":"netease","url_id":28285910,"pic_id":null,"lyric_id":28285910,"pic":"http://p3.music.126.net/gWNsPDBbQCQXVNvMdnAH8A==/18815942487303143.jpg?param=300y300","url":""},

{"id":29814898,"name":"可惜没如果","artist":"林俊杰","album":"新地球","source":"netease","url_id":29814898,"pic_id":null,"lyric_id":29814898,"pic":"http://p3.music.126.net/X0EDfXzxMQJiQ-71JFGdZw==/3238061746556733.jpg?param=300y300","url":""},

{"id":1335330283,"name":"Infinity","artist":"Jaymes Young","album":"Feel Something","source":"netease","url_id":1335330283,"pic_id":null,"lyric_id":1335330283,"pic":"http://p3.music.126.net/U10EUHljYZWT07TWezJg8g==/109951166677557030.jpg?param=300y300","url":""},

{"id":1381755293,"name":"山楂树之恋","artist":"程佳佳","album":"山楂树之恋 (完整版)","source":"netease","url_id":1381755293,"pic_id":null,"lyric_id":1381755293,"pic":"http://p4.music.126.net/G00sAe86sPi5gFQyuJHU7A==/109951164260611202.jpg?param=300y300","url":""},

{"id":1877996649,"name":"危险派对","artist":"王以太","album":"危险派对","source":"netease","url_id":1877996649,"pic_id":null,"lyric_id":1877996649,"pic":"http://p3.music.126.net/GpnLproqUUyc4xmYKpRFcQ==/109951166516282895.jpg?param=300y300","url":""},

{"id":1436709403,"name":"夏天的风","artist":"火羊瞌睡了","album":"夏天的风","source":"netease","url_id":1436709403,"pic_id":null,"lyric_id":1436709403,"pic":"http://p4.music.126.net/rFUKVdOjqxgwAT6Zi6qv7A==/109951164906689206.jpg?param=300y300","url":""},

{"id":1906009576,"name":"情绪收音机","artist":"侯东Holdon","album":"情绪收音机","source":"netease","url_id":1906009576,"pic_id":null,"lyric_id":1906009576,"pic":"http://p4.music.126.net/kH7sOwJTMasIuq_7nWJR4g==/109951166783769952.jpg?param=300y300","url":""},

{"id":1443838552,"name":"他只是经过","artist":"h3R3","album":"他只是经过","source":"netease","url_id":1443838552,"pic_id":null,"lyric_id":1443838552,"pic":"http://p4.music.126.net/wUog39IHoJb76pL0AVCFNQ==/109951165348116023.jpg?param=300y300","url":""},

{"id":1844449888,"name":"楼顶上的小斑鸠","artist":"队长","album":"队长的音乐世界","source":"netease","url_id":1844449888,"pic_id":null,"lyric_id":1844449888,"pic":"http://p4.music.126.net/6hLTikf30kzZExMuDDj0SQ==/109951165972937664.jpg?param=300y300","url":""},

{"id":1413142894,"name":"大眠 (完整版)","artist":"小乐哥（王唯乐）","album":"大眠 (完整版)","source":"netease","url_id":1413142894,"pic_id":null,"lyric_id":1413142894,"pic":"http://p3.music.126.net/zgDvTPDSYKjQUjkV8sQUOA==/109951164605092552.jpg?param=300y300","url":""},

{"id":1457707546,"name":"Love Story","artist":"Taylor Swift","album":"Pride Month","source":"netease","url_id":1457707546,"pic_id":null,"lyric_id":1457707546,"pic":"http://p3.music.126.net/JoVareIX82eEzbrYtJLAPA==/109951165084884378.jpg?param=300y300","url":""},

{"id":1413863166,"name":"想去海边","artist":"夏日入侵企画","album":"想去海边","source":"netease","url_id":1413863166,"pic_id":null,"lyric_id":1413863166,"pic":"http://p4.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg?param=300y300","url":""},

{"id":208891,"name":"Letting Go","artist":"蔡健雅","album":"说到爱","source":"netease","url_id":208891,"pic_id":null,"lyric_id":208891,"pic":"http://p3.music.126.net/VTZde5VdBm_u2WH0Pc9HQQ==/109951165561227373.jpg?param=300y300","url":""},

{"id":362998,"name":"老男孩","artist":"筷子兄弟","album":"父亲","source":"netease","url_id":362998,"pic_id":null,"lyric_id":362998,"pic":"http://p4.music.126.net/cTIg4WjhzKXJAf1tnCivIg==/95657511628674.jpg?param=300y300","url":""},

{"id":1846489646,"name":"嘉宾","artist":"路飞文","album":"嘉宾","source":"netease","url_id":1846489646,"pic_id":null,"lyric_id":1846489646,"pic":"http://p4.music.126.net/LoVqPgkI7DwSNZk50gcODg==/109951165994863998.jpg?param=300y300","url":""},

{"id":1813864802,"name":"你的轮廓","artist":"叶琼琳","album":"你的轮廓","source":"netease","url_id":1813864802,"pic_id":null,"lyric_id":1813864802,"pic":"http://p3.music.126.net/-u92GsfIvtgTXCRapqQZeQ==/109951165647093663.jpg?param=300y300","url":""},

{"id":25727803,"name":"修炼爱情","artist":"林俊杰","album":"因你 而在","source":"netease","url_id":25727803,"pic_id":null,"lyric_id":25727803,"pic":"http://p4.music.126.net/D_hiKMwrdQlqD36LoKLO2w==/109951163187408030.jpg?param=300y300","url":""},

{"id":400876320,"name":"Unstoppable","artist":"Sia","album":"This Is Acting","source":"netease","url_id":400876320,"pic_id":null,"lyric_id":400876320,"pic":"http://p3.music.126.net/zmDE8IMf0QKDLVQc1xh4RA==/109951165973312283.jpg?param=300y300","url":""},

{"id":1413585838,"name":"与我无关","artist":"阿冗","album":"与我无关","source":"netease","url_id":1413585838,"pic_id":null,"lyric_id":1413585838,"pic":"http://p4.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg?param=300y300","url":""},

{"id":1481164987,"name":"会不会（吉他版）","artist":"刘大壮","album":"会不会","source":"netease","url_id":1481164987,"pic_id":null,"lyric_id":1481164987,"pic":"http://p3.music.126.net/SFXsIYI3hCCedvbqrvVytA==/109951165335411992.jpg?param=300y300","url":""},

{"id":1336856864,"name":"形容","artist":"沈以诚","album":"初遇","source":"netease","url_id":1336856864,"pic_id":null,"lyric_id":1336856864,"pic":"http://p3.music.126.net/1iLwRvMtUMYLZUNR-HQW7Q==/109951163957708692.jpg?param=300y300","url":""},

{"id":1824025894,"name":"慢热","artist":"满舒克","album":"慢热","source":"netease","url_id":1824025894,"pic_id":null,"lyric_id":1824025894,"pic":"http://p4.music.126.net/-HdZrLn0NpxshDBIhrxp-Q==/109951165959141349.jpg?param=300y300","url":""},

{"id":1888622459,"name":"Boring Day","artist":"Stake","album":"Boring Day","source":"netease","url_id":1888622459,"pic_id":null,"lyric_id":1888622459,"pic":"http://p3.music.126.net/2QfN7YwWRXUC_6Uw1Eavcg==/109951166540850842.jpg?param=300y300","url":""},

{"id":1899079967,"name":"问心","artist":"就是南方凯（项学凯）","album":"问心","source":"netease","url_id":1899079967,"pic_id":null,"lyric_id":1899079967,"pic":"http://p3.music.126.net/FYHEiOQRz6wRVgbGMlURtw==/109951166670432329.jpg?param=300y300","url":""},

{"id":1456659704,"name":"red lips（被我蒙对）","artist":"沙一汀EL","album":"red lips","source":"netease","url_id":1456659704,"pic_id":null,"lyric_id":1456659704,"pic":"http://p4.music.126.net/MOO71VLFwuGyw3aCB0N-1Q==/109951166380561612.jpg?param=300y300","url":""},

{"id":32835565,"name":"国王与乞丐","artist":"华晨宇","album":"异类","source":"netease","url_id":32835565,"pic_id":null,"lyric_id":32835565,"pic":"http://p4.music.126.net/UsSAd3Bdf77DjhCuTSEvUw==/109951163077613693.jpg?param=300y300","url":""},

{"id":1406649619,"name":"有些","artist":"颜人中","album":"失眠症候群","source":"netease","url_id":1406649619,"pic_id":null,"lyric_id":1406649619,"pic":"http://p4.music.126.net/8DkTnzi7jdjWGYl4qbwLCg==/109951164517295956.jpg?param=300y300","url":""},

{"id":1432968475,"name":"独行侠+爱如潮水（remix）","artist":"sea蕊","album":"独行侠+爱如潮水（Remix）","source":"netease","url_id":1432968475,"pic_id":null,"lyric_id":1432968475,"pic":"http://p4.music.126.net/ra554YmMoOBw8_8xDiDZNg==/109951166276735546.jpg?param=300y300","url":""},

{"id":1331819951,"name":"像鱼","artist":"王贰浪","album":"像鱼","source":"netease","url_id":1331819951,"pic_id":null,"lyric_id":1331819951,"pic":"http://p4.music.126.net/ejEPGN6ulPSgCBXGq7dgqw==/109951163720047382.jpg?param=300y300","url":""},

{"id":65536,"name":"爱情转移","artist":"陈奕迅","album":"认了吧","source":"netease","url_id":65536,"pic_id":null,"lyric_id":65536,"pic":"http://p3.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg?param=300y300","url":""},

{"id":1493083969,"name":"一分一寸","artist":"阿YueYue","album":"一分一寸","source":"netease","url_id":1493083969,"pic_id":null,"lyric_id":1493083969,"pic":"http://p3.music.126.net/9W-qrrC0qV35YNVMcjWI0w==/109951165440845710.jpg?param=300y300","url":""},

{"id":1423241987,"name":"7 %","artist":"XMASwu","album":"柒","source":"netease","url_id":1423241987,"pic_id":null,"lyric_id":1423241987,"pic":"http://p4.music.126.net/YsXfYs7s2-d0lJwRtp_klQ==/109951164700110582.jpg?param=300y300","url":""},

{"id":1901049671,"name":"叹","artist":"黄龄","album":"叹","source":"netease","url_id":1901049671,"pic_id":null,"lyric_id":1901049671,"pic":"http://p4.music.126.net/WahzToPp-KE-VGht0nY7fw==/109951166698341563.jpg?param=300y300","url":""},

{"id":1426112587,"name":"下雨天","artist":"与少年他","album":"下雨天","source":"netease","url_id":1426112587,"pic_id":null,"lyric_id":1426112587,"pic":"http://p4.music.126.net/qRfggLX2Va3Wslqjr7FxSg==/109951164742550320.jpg?param=300y300","url":""},

{"id":1374329431,"name":"Dancing With Your Ghost","artist":"Sasha Alex Sloan","album":"Dancing With Your Ghost","source":"netease","url_id":1374329431,"pic_id":null,"lyric_id":1374329431,"pic":"http://p3.music.126.net/T2vjSPaRZxFGIC2HOXElkQ==/109951165986777646.jpg?param=300y300","url":""},

{"id":1293886117,"name":"年少有为","artist":"李荣浩","album":"耳朵","source":"netease","url_id":1293886117,"pic_id":null,"lyric_id":1293886117,"pic":"http://p3.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg?param=300y300","url":""},

{"id":1344897943,"name":"你是人间四月天","artist":"邵帅","album":"你是人间四月天","source":"netease","url_id":1344897943,"pic_id":null,"lyric_id":1344897943,"pic":"http://p3.music.126.net/kQJQD58WkmQneTneOYe22A==/109951164252455813.jpg?param=300y300","url":""},

{"id":1365898499,"name":"失眠飞行","artist":"接个吻，开一枪","album":"失眠飞行","source":"netease","url_id":1365898499,"pic_id":null,"lyric_id":1365898499,"pic":"http://p4.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg?param=300y300","url":""},

{"id":1346104327,"name":"多想在平庸的生活拥抱你","artist":"隔壁老樊","album":"我曾","source":"netease","url_id":1346104327,"pic_id":null,"lyric_id":1346104327,"pic":"http://p3.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg?param=300y300","url":""},

{"id":1365393542,"name":"孤身","artist":"徐秉龙","album":"孤身","source":"netease","url_id":1365393542,"pic_id":null,"lyric_id":1365393542,"pic":"http://p4.music.126.net/yVmtE5RFcJ1fhv-ivuyuRw==/109951164075300143.jpg?param=300y300","url":""},

{"id":518725853,"name":"篝火旁","artist":"吕大叶","album":"313","source":"netease","url_id":518725853,"pic_id":null,"lyric_id":518725853,"pic":"http://p4.music.126.net/sN5dTpmeJO1DhxIj1ogMLg==/109951163416453597.jpg?param=300y300","url":""},

{"id":1407551413,"name":"麻雀","artist":"李荣浩","album":"麻雀","source":"netease","url_id":1407551413,"pic_id":null,"lyric_id":1407551413,"pic":"http://p3.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg?param=300y300","url":""},

{"id":514761281,"name":"白羊","artist":"徐秉龙","album":"白羊","source":"netease","url_id":514761281,"pic_id":null,"lyric_id":514761281,"pic":"http://p3.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg?param=300y300","url":""},

{"id":1363205817,"name":"你走以后1.0","artist":"王恩信Est","album":"你走以后1.0","source":"netease","url_id":1363205817,"pic_id":null,"lyric_id":1363205817,"pic":"http://p4.music.126.net/n6_HOUCgBfk46D-9OCwyeQ==/109951164049623941.jpg?param=300y300","url":""},

{"id":1882041535,"name":"偏爱和例外","artist":"烟(许佳豪)","album":"偏爱和例外","source":"netease","url_id":1882041535,"pic_id":null,"lyric_id":1882041535,"pic":"http://p4.music.126.net/JYvdNI663ipf6MGrqoDJQw==/109951166554980945.jpg?param=300y300","url":""},

{"id":1904192389,"name":"倒流时间","artist":"G.E.M.邓紫棋","album":"倒流时间","source":"netease","url_id":1904192389,"pic_id":null,"lyric_id":1904192389,"pic":"http://p4.music.126.net/FCKp2mI10gDcVKosKqZ_Rw==/109951166738436559.jpg?param=300y300","url":""},

{"id":1880886636,"name":"以爱为囚","artist":"满舒克","album":"以爱为囚","source":"netease","url_id":1880886636,"pic_id":null,"lyric_id":1880886636,"pic":"http://p3.music.126.net/K9WLBty-JNHoB1HBeRalPg==/109951166450837207.jpg?param=300y300","url":""},

{"id":1875941511,"name":"假面舞会","artist":"很美味","album":"假面舞会","source":"netease","url_id":1875941511,"pic_id":null,"lyric_id":1875941511,"pic":"http://p3.music.126.net/JtwwGP3ICHiecXJ1i8yPuQ==/109951166379852961.jpg?param=300y300","url":""},

{"id":1814636483,"name":"艺术家","artist":"MaySeventeen","album":"艺术家","source":"netease","url_id":1814636483,"pic_id":null,"lyric_id":1814636483,"pic":"http://p4.music.126.net/ExMWxjE0YZD5RXcV0p674w==/109951166694825104.jpg?param=300y300","url":""},

{"id":1398663411,"name":"冬眠","artist":"司南","album":"冬眠","source":"netease","url_id":1398663411,"pic_id":null,"lyric_id":1398663411,"pic":"http://p3.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=300y300","url":""},

{"id":483937795,"name":"撒野","artist":"凯瑟喵","album":"撒野","source":"netease","url_id":483937795,"pic_id":null,"lyric_id":483937795,"pic":"http://p4.music.126.net/cTMQotCcZqabLkv7c1zntA==/109951166267066450.jpg?param=300y300","url":""},

{"id":1805088448,"name":"大雾","artist":"未知音素","album":"大雾 ","source":"netease","url_id":1805088448,"pic_id":null,"lyric_id":1805088448,"pic":"http://p4.music.126.net/0fL8vcI942Wocdt4M1dp4A==/109951165547470592.jpg?param=300y300","url":""},

{"id":512376326,"name":"阿衣莫","artist":"阿吉太组合","album":"阿衣莫","source":"netease","url_id":512376326,"pic_id":null,"lyric_id":512376326,"pic":"http://p3.music.126.net/T8NN9mGSxJL8GhtCpJjL7w==/109951166336905015.jpg?param=300y300","url":""},

{"id":1851258433,"name":"风吹一夏","artist":"DP龙猪","album":"风吹一夏","source":"netease","url_id":1851258433,"pic_id":null,"lyric_id":1851258433,"pic":"http://p3.music.126.net/C6Sivb-S0AsU-Jg1FtHWrg==/109951166067538191.jpg?param=300y300","url":""},

{"id":1873049720,"name":"初恋","artist":"回春丹","album":"初恋","source":"netease","url_id":1873049720,"pic_id":null,"lyric_id":1873049720,"pic":"http://p4.music.126.net/4NJvc1HOi4uv7cs4501Bjg==/109951166324714668.jpg?param=300y300","url":""},

{"id":1467444619,"name":"雨爱","artist":"不是花火呀","album":"雨爱","source":"netease","url_id":1467444619,"pic_id":null,"lyric_id":1467444619,"pic":"http://p3.music.126.net/YGc0vH5BJhE7g0XVsaq_xQ==/109951166289177279.jpg?param=300y300","url":""},

{"id":1417862046,"name":"呓语","artist":"毛不易","album":"小王","source":"netease","url_id":1417862046,"pic_id":null,"lyric_id":1417862046,"pic":"http://p3.music.126.net/XPPeIZu7wgcGXZ0666mfFg==/109951164640697307.jpg?param=300y300","url":""},

{"id":1849998058,"name":"22秒","artist":"Aioz","album":"22秒","source":"netease","url_id":1849998058,"pic_id":null,"lyric_id":1849998058,"pic":"http://p3.music.126.net/IfFINzaq3yqFSOCiCJbauw==/109951166053751852.jpg?param=300y300","url":""},

{"id":1826189041,"name":"花,太阳,彩虹,你","artist":"Mai","album":"MYSTERY TOY BOX","source":"netease","url_id":1826189041,"pic_id":null,"lyric_id":1826189041,"pic":"http://p4.music.126.net/6EX0yj-r5GBLzSNU20rrmQ==/109951165791933542.jpg?param=300y300","url":""},

{"id":254574,"name":"后来","artist":"刘若英","album":"我等你","source":"netease","url_id":254574,"pic_id":null,"lyric_id":254574,"pic":"http://p3.music.126.net/eBF7bHnJYBUfOFrJ_7SUfw==/109951163351825356.jpg?param=300y300","url":""},

{"id":1400256289,"name":"你的答案","artist":"阿冗","album":"你的答案","source":"netease","url_id":1400256289,"pic_id":null,"lyric_id":1400256289,"pic":"http://p3.music.126.net/OlX-4S4L0Hdkyy_DQ27zag==/109951164459621658.jpg?param=300y300","url":""},

{"id":31090820,"name":"Stitches","artist":"Shawn Mendes","album":"Handwritten (Deluxe)","source":"netease","url_id":31090820,"pic_id":null,"lyric_id":31090820,"pic":"http://p3.music.126.net/jlq1o3pRlfouWMZyIFY_iw==/109951166110745589.jpg?param=300y300","url":""},

{"id":1888215863,"name":"南半球与北海道","artist":"范倪Liu","album":"南半球与北海道","source":"netease","url_id":1888215863,"pic_id":null,"lyric_id":1888215863,"pic":"http://p4.music.126.net/JLJp2tVO743LUZp4DL94bw==/109951166535541790.jpg?param=300y300","url":""},

{"id":536622304,"name":"Lemon","artist":"米津玄師","album":"Lemon","source":"netease","url_id":536622304,"pic_id":null,"lyric_id":536622304,"pic":"http://p3.music.126.net/jtPZRUFrSS-nRCjW_LYowQ==/109951166521931227.jpg?param=300y300","url":""},

{"id":1459950258,"name":"是想你的声音啊","artist":"傲七爷","album":"是想你的声音啊","source":"netease","url_id":1459950258,"pic_id":null,"lyric_id":1459950258,"pic":"http://p3.music.126.net/cIR63lyPGgQ4mAyuOTg8lA==/109951165109878587.jpg?param=300y300","url":""},

{"id":1308818967,"name":"飘向北方 (Live)","artist":"那吾克热-NW","album":"中国新说唱 第10期","source":"netease","url_id":1308818967,"pic_id":null,"lyric_id":1308818967,"pic":"http://p3.music.126.net/D-mpVLLwMrA-hPu0QPYUNQ==/109951163551410648.jpg?param=300y300","url":""},

{"id":1827109585,"name":"沦陷","artist":"魏晨","album":"原来我很爱你 影视原声带","source":"netease","url_id":1827109585,"pic_id":null,"lyric_id":1827109585,"pic":"http://p3.music.126.net/hBJjcyLC597nOuLvQB4E7g==/109951166292582560.jpg?param=300y300","url":""},

{"id":1442508316,"name":"丢了你","artist":"井胧","album":"丢了你","source":"netease","url_id":1442508316,"pic_id":null,"lyric_id":1442508316,"pic":"http://p3.music.126.net/zYIadX_Prawn3nMTRA9tOQ==/109951164928052888.jpg?param=300y300","url":""},

{"id":1449416890,"name":"所以你睡了没","artist":"沙一汀EL","album":"所以你睡了没","source":"netease","url_id":1449416890,"pic_id":null,"lyric_id":1449416890,"pic":"http://p3.music.126.net/aZeqFOP-Lz1eFudDwlKLkQ==/109951165001187104.jpg?param=300y300","url":""},

{"id":1899705498,"name":"Star (反方向的钟)","artist":"XMASwu","album":"Star (反方向的钟)","source":"netease","url_id":1899705498,"pic_id":null,"lyric_id":1899705498,"pic":"http://p3.music.126.net/6-F8k6AuCnsvMjDNKYHriw==/109951166677305699.jpg?param=300y300","url":""},

{"id":25706282,"name":"夜空中最亮的星","artist":"逃跑计划","album":"世界","source":"netease","url_id":25706282,"pic_id":null,"lyric_id":25706282,"pic":"http://p4.music.126.net/Eef2K2KV9dT3XUA6_Ve-Rw==/109951165543196748.jpg?param=300y300","url":""},

{"id":1903149553,"name":"无名的人","artist":"毛不易","album":"无名的人","source":"netease","url_id":1903149553,"pic_id":null,"lyric_id":1903149553,"pic":"http://p4.music.126.net/tLKBLSGTBgHKpazu83hZfw==/109951166724351491.jpg?param=300y300","url":""},

{"id":1840192925,"name":"海底（Live）","artist":"凤凰传奇","album":"为歌而赞 第7期","source":"netease","url_id":1840192925,"pic_id":null,"lyric_id":1840192925,"pic":"http://p3.music.126.net/6foZcR0P2Pdw0HRIdV1aiQ==/109951165914949830.jpg?param=300y300","url":""},

{"id":461347998,"name":"Something Just Like This","artist":"The Chainsmokers","album":"Something Just Like This","source":"netease","url_id":461347998,"pic_id":null,"lyric_id":461347998,"pic":"http://p3.music.126.net/A59-h_qsGXsq0wDbGVPNbg==/109951165981250182.jpg?param=300y300","url":""},

{"id":1410647903,"name":"带我去找夜生活","artist":"告五人","album":"带我去找夜生活","source":"netease","url_id":1410647903,"pic_id":null,"lyric_id":1410647903,"pic":"http://p3.music.126.net/lmCtt6-3fOPSdA1uwGCY5Q==/109951164567402626.jpg?param=300y300","url":""},

{"id":475479888,"name":"在你的身边","artist":"盛哲","album":"在你的身边","source":"netease","url_id":475479888,"pic_id":null,"lyric_id":475479888,"pic":"http://p4.music.126.net/AYNBdRxJ8EdZo4xFjp7b4Q==/109951163191178425.jpg?param=300y300","url":""},

{"id":1815105886,"name":"狐狸的童话","artist":"Santa_SA","album":"狐狸的童话","source":"netease","url_id":1815105886,"pic_id":null,"lyric_id":1815105886,"pic":"http://p3.music.126.net/jnSajZlbE9ed8QGVlbwK0A==/109951165666607256.jpg?param=300y300","url":""},

{"id":1303027499,"name":"总有一天你会出现在我身边","artist":"棱镜","album":"一次有预谋的初次相遇","source":"netease","url_id":1303027499,"pic_id":null,"lyric_id":1303027499,"pic":"http://p3.music.126.net/RfUHXkanpxImcaGqFNWBeA==/109951163598901405.jpg?param=300y300","url":""},

{"id":1384026889,"name":"所念皆星河","artist":"CMJ","album":"所念皆星河","source":"netease","url_id":1384026889,"pic_id":null,"lyric_id":1384026889,"pic":"http://p3.music.126.net/M34HFzLO2xhDLuX_zEALKA==/109951164291347934.jpg?param=300y300","url":""},

{"id":29436904,"name":"南山南","artist":"马頔","album":"南山南","source":"netease","url_id":29436904,"pic_id":null,"lyric_id":29436904,"pic":"http://p4.music.126.net/WkzQgHTnH1Yf4BXQVgktOg==/6648746813825382.jpg?param=300y300","url":""},

{"id":525278976,"name":"黑夜问白天","artist":"林俊杰","album":"黑夜问白天","source":"netease","url_id":525278976,"pic_id":null,"lyric_id":525278976,"pic":"http://p4.music.126.net/KHBdIrV8pBeC25IVfJuwGg==/109951163093094139.jpg?param=300y300","url":""},

{"id":1809100933,"name":"我都明白","artist":"范倪Liu","album":"我都明白","source":"netease","url_id":1809100933,"pic_id":null,"lyric_id":1809100933,"pic":"http://p4.music.126.net/CWA_TE4el0e5nVg9JOt00A==/109951165603993988.jpg?param=300y300","url":""},

{"id":553755659,"name":"可不可以","artist":"张紫豪","album":"可不可以","source":"netease","url_id":553755659,"pic_id":null,"lyric_id":553755659,"pic":"http://p4.music.126.net/WafK2OQfEtqXitdDXJ772Q==/109951163252847249.jpg?param=300y300","url":""},

{"id":1479526505,"name":"虞兮叹","artist":"闻人听書_","album":"虞兮叹","source":"netease","url_id":1479526505,"pic_id":null,"lyric_id":1479526505,"pic":"http://p3.music.126.net/6gdwWjPXUkyTx4CuuSxkIg==/109951165319864977.jpg?param=300y300","url":""},

{"id":1841002409,"name":"放空","artist":"大籽","album":"放空","source":"netease","url_id":1841002409,"pic_id":null,"lyric_id":1841002409,"pic":"http://p3.music.126.net/ocVnhvD-nXHKEM3TvBUZsw==/109951165931493179.jpg?param=300y300","url":""},

{"id":1805317558,"name":"Black Magic","artist":"Jonasu","album":"Black Magic","source":"netease","url_id":1805317558,"pic_id":null,"lyric_id":1805317558,"pic":"http://p3.music.126.net/KFS9Z18U07UQKuhXWaFZOg==/109951165549454434.jpg?param=300y300","url":""},

{"id":1459232593,"name":"But U","artist":"NINEONE#","album":"But U","source":"netease","url_id":1459232593,"pic_id":null,"lyric_id":1459232593,"pic":"http://p4.music.126.net/li19i75jz6GGOT79IyAjYA==/109951165100592039.jpg?param=300y300","url":""},

{"id":1804879213,"name":"过","artist":"王嘉尔","album":"过","source":"netease","url_id":1804879213,"pic_id":null,"lyric_id":1804879213,"pic":"http://p3.music.126.net/fwXShM46KdIj3hB8_lJ71g==/109951165545588869.jpg?param=300y300","url":""},

{"id":29803676,"name":"Lone Ranger","artist":"Rachel Platten","album":"Fight Song","source":"netease","url_id":29803676,"pic_id":null,"lyric_id":29803676,"pic":"http://p3.music.126.net/XUHjsGtSC63UTiKEWbtvmQ==/109951165972029591.jpg?param=300y300","url":""},

{"id":1436910205,"name":"好想爱这个世界啊 (Live)","artist":"华晨宇","album":"歌手·当打之年 第9期","source":"netease","url_id":1436910205,"pic_id":null,"lyric_id":1436910205,"pic":"http://p3.music.126.net/p7n_zp4eoxY3a1XPzIomHQ==/109951164863688864.jpg?param=300y300","url":""},

{"id":1487528112,"name":"经济舱 (Live)","artist":"Kafe.Hu","album":"中国新说唱2020 第十期","source":"netease","url_id":1487528112,"pic_id":null,"lyric_id":1487528112,"pic":"http://p3.music.126.net/iXfcMxrGisgh5Dxkc3HTFQ==/109951165393530790.jpg?param=300y300","url":""},

{"id":1449678888,"name":"回到夏天","artist":"傲七爷","album":"回到夏天","source":"netease","url_id":1449678888,"pic_id":null,"lyric_id":1449678888,"pic":"http://p4.music.126.net/6DtmsO-P4jyJPLjnGa8Ytg==/109951165004114065.jpg?param=300y300","url":""},

{"id":574921549,"name":"怪咖","artist":"薛之谦","album":"怪咖","source":"netease","url_id":574921549,"pic_id":null,"lyric_id":574921549,"pic":"http://p4.music.126.net/TOkRGd59o3hAOKsnMMmMMA==/109951163755246383.jpg?param=300y300","url":""},

{"id":1398508295,"name":"多情种","artist":"要不要买菜","album":"多情种","source":"netease","url_id":1398508295,"pic_id":null,"lyric_id":1398508295,"pic":"http://p4.music.126.net/ZYgsZKTn5dclbcDVrLnxdw==/109951164442715619.jpg?param=300y300","url":""},

{"id":1406642934,"name":"我要找到你","artist":"Zic子晨","album":"我要找到你","source":"netease","url_id":1406642934,"pic_id":null,"lyric_id":1406642934,"pic":"http://p4.music.126.net/A4uSU0kJZT0xpw-S0fGg2Q==/109951164539421824.jpg?param=300y300","url":""},

{"id":1297802566,"name":"盗墓笔记·十年人间","artist":"李常超 (Lao乾妈)","album":"盗墓笔记·十年人间","source":"netease","url_id":1297802566,"pic_id":null,"lyric_id":1297802566,"pic":"http://p4.music.126.net/TdqG8yFWSZgQqH2K235MgA==/109951163434990771.jpg?param=300y300","url":""},

{"id":1903035009,"name":"失眠播报","artist":"苏星婕","album":"失眠播报","source":"netease","url_id":1903035009,"pic_id":null,"lyric_id":1903035009,"pic":"http://p4.music.126.net/cYtx0sb4D1Ox3qVcoGzADQ==/109951166722935257.jpg?param=300y300","url":""},

{"id":1383927243,"name":"这一生关于你的风景","artist":"隔壁老樊","album":"这一生关于你的风景","source":"netease","url_id":1383927243,"pic_id":null,"lyric_id":1383927243,"pic":"http://p4.music.126.net/72pkxsrTN_zUscdzMk5mMA==/109951164289743850.jpg?param=300y300","url":""},

{"id":1843704418,"name":"星河万里","artist":"Rom邢锐","album":"星河万里","source":"netease","url_id":1843704418,"pic_id":null,"lyric_id":1843704418,"pic":"http://p3.music.126.net/QYOtbVhmJ-jpPzCPWqjZUw==/109951165965398413.jpg?param=300y300","url":""},

{"id":191248,"name":"明天过后","artist":"张杰","album":"明天过后","source":"netease","url_id":191248,"pic_id":null,"lyric_id":191248,"pic":"http://p3.music.126.net/ixIs5kkukgNYMmeDsc35_g==/29686813955450.jpg?param=300y300","url":""},

{"id":65533,"name":"红玫瑰","artist":"陈奕迅","album":"认了吧","source":"netease","url_id":65533,"pic_id":null,"lyric_id":65533,"pic":"http://p4.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg?param=300y300","url":""},

{"id":1486264538,"name":"心跳的证明","artist":"不是花火呀","album":"心跳的证明","source":"netease","url_id":1486264538,"pic_id":null,"lyric_id":1486264538,"pic":"http://p4.music.126.net/eUMe4HQKjYYBx0gpwP-Ybw==/109951166348798738.jpg?param=300y300","url":""},

{"id":496370620,"name":"断线","artist":"Shang","album":"断线","source":"netease","url_id":496370620,"pic_id":null,"lyric_id":496370620,"pic":"http://p4.music.126.net/W-4b64hCb_s8OAGROQXgig==/109951162995598984.jpg?param=300y300","url":""},

{"id":1907710034,"name":"大雨","artist":"deca joins","album":"大雨","source":"netease","url_id":1907710034,"pic_id":null,"lyric_id":1907710034,"pic":"http://p4.music.126.net/I-ClYF10oq2CYe9CHdUjcw==/109951166867193453.jpg?param=300y300","url":""},

{"id":1852086408,"name":"别怕我伤心","artist":"悦开心i","album":"别怕我伤心","source":"netease","url_id":1852086408,"pic_id":null,"lyric_id":1852086408,"pic":"http://p4.music.126.net/orOwEsESQDZa6JsecPI1Yw==/109951166075100391.jpg?param=300y300","url":""},

{"id":169185,"name":"认真的雪","artist":"薛之谦","album":"未完成的歌","source":"netease","url_id":169185,"pic_id":null,"lyric_id":169185,"pic":"http://p3.music.126.net/iSfHsgwCPXyvIC-9b3Oytw==/109951165625500222.jpg?param=300y300","url":""},

{"id":167876,"name":"有何不可","artist":"许嵩","album":"自定义","source":"netease","url_id":167876,"pic_id":null,"lyric_id":167876,"pic":"http://p4.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg?param=300y300","url":""},

{"id":1405283464,"name":"句号","artist":"G.E.M.邓紫棋","album":"摩天动物园","source":"netease","url_id":1405283464,"pic_id":null,"lyric_id":1405283464,"pic":"http://p3.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg?param=300y300","url":""},

{"id":108134,"name":"学不会","artist":"林俊杰","album":"学不会","source":"netease","url_id":108134,"pic_id":null,"lyric_id":108134,"pic":"http://p4.music.126.net/1xByYChHOHC0IEg_TkyGOg==/109951165627866740.jpg?param=300y300","url":""},

{"id":1869728598,"name":"天上飞","artist":"李承铉","album":"天上飞","source":"netease","url_id":1869728598,"pic_id":null,"lyric_id":1869728598,"pic":"http://p3.music.126.net/DmRmH7TzcQsxLAatUWXuhg==/109951166287247371.jpg?param=300y300","url":""},

{"id":115569,"name":"护花使者","artist":"李克勤","album":"雨中街头剧","source":"netease","url_id":115569,"pic_id":null,"lyric_id":115569,"pic":"http://p4.music.126.net/Cn30wC1AtD6ywqYIQIDvPg==/109951166738186070.jpg?param=300y300","url":""},

{"id":31789010,"name":"Shots (Broiler Remix)","artist":"Imagine Dragons","album":"Shots","source":"netease","url_id":31789010,"pic_id":null,"lyric_id":31789010,"pic":"http://p3.music.126.net/_WUjq86Db9pfhpwaYeoLqQ==/109951163219130849.jpg?param=300y300","url":""},

{"id":570340213,"name":"极恶都市","artist":"夏日入侵企画","album":"极恶都市","source":"netease","url_id":570340213,"pic_id":null,"lyric_id":570340213,"pic":"http://p4.music.126.net/ZqJp0p4eDzCUCboH-WZJYA==/109951163326946996.jpg?param=300y300","url":""},

{"id":1840808119,"name":"Mood (Lil Ghost Remix)","artist":"24kGoldn","album":"Mood (Lil Ghost Remix)","source":"netease","url_id":1840808119,"pic_id":null,"lyric_id":1840808119,"pic":"http://p3.music.126.net/Ggpf7jURLCUKKlT4qAUW4Q==/109951165929809633.jpg?param=300y300","url":""},

{"id":1391891631,"name":"嗜好","artist":"颜人中","album":"嗜好","source":"netease","url_id":1391891631,"pic_id":null,"lyric_id":1391891631,"pic":"http://p3.music.126.net/J6HaJjtgv-yVVjyUm-h-AA==/109951164373633387.jpg?param=300y300","url":""},

{"id":31445772,"name":"理想三旬","artist":"陈鸿宇","album":"浓烟下的诗歌电台","source":"netease","url_id":31445772,"pic_id":null,"lyric_id":31445772,"pic":"http://p3.music.126.net/cqTTEPAaxXG3cOwaE4E_-g==/109951163104103366.jpg?param=300y300","url":""},

{"id":1842728629,"name":"如果呢","artist":"郑润泽","album":"如果呢","source":"netease","url_id":1842728629,"pic_id":null,"lyric_id":1842728629,"pic":"http://p4.music.126.net/-xMsNLpquZTmMZlIztTgHg==/109951165953469081.jpg?param=300y300","url":""},

{"id":1435449062,"name":"收敛","artist":"不够","album":"收敛","source":"netease","url_id":1435449062,"pic_id":null,"lyric_id":1435449062,"pic":"http://p4.music.126.net/B-iwvcPT9gTj7Wv3fQ3png==/109951164853155233.jpg?param=300y300","url":""},

{"id":1464325108,"name":"Mood","artist":"24kGoldn","album":"Mood","source":"netease","url_id":1464325108,"pic_id":null,"lyric_id":1464325108,"pic":"http://p3.music.126.net/LfAiSYcf5FLgfvVtLzN77w==/109951165165797187.jpg?param=300y300","url":""},

{"id":569214250,"name":"借","artist":"毛不易","album":"平凡的一天","source":"netease","url_id":569214250,"pic_id":null,"lyric_id":569214250,"pic":"http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=300y300","url":""},

{"id":1893736474,"name":"靠近","artist":"赖仔Morris","album":"靠近","source":"netease","url_id":1893736474,"pic_id":null,"lyric_id":1893736474,"pic":"http://p3.music.126.net/FUXOsgFuIhXBK3oQDdERgA==/109951166605322131.jpg?param=300y300","url":""},

{"id":1489064589,"name":"秋天不回来 ","artist":"刘大壮","album":"秋天不回来","source":"netease","url_id":1489064589,"pic_id":null,"lyric_id":1489064589,"pic":"http://p4.music.126.net/dMkp3aUWBgBn_y1_t1zuEw==/109951165406942044.jpg?param=300y300","url":""},

{"id":1893367646,"name":"秒针","artist":"阿梨粤","album":"秒针","source":"netease","url_id":1893367646,"pic_id":null,"lyric_id":1893367646,"pic":"http://p4.music.126.net/KOc728F6RYUoa4D41c4pZA==/109951166605308483.jpg?param=300y300","url":""},

{"id":1403215687,"name":"想见你想见你想见你","artist":"八三夭","album":"想见你想见你想见你","source":"netease","url_id":1403215687,"pic_id":null,"lyric_id":1403215687,"pic":"http://p3.music.126.net/8MjQbJQtJRV81d1dNfiH6A==/109951164485238047.jpg?param=300y300","url":""},

{"id":1491221473,"name":"我很好（吉他版）","artist":"刘大壮","album":"我很好","source":"netease","url_id":1491221473,"pic_id":null,"lyric_id":1491221473,"pic":"http://p4.music.126.net/qGIzwzf05taTVfk9PSnSiw==/109951165424768428.jpg?param=300y300","url":""},

{"id":1819970423,"name":"纵容","artist":"Capper","album":"纵容","source":"netease","url_id":1819970423,"pic_id":null,"lyric_id":1819970423,"pic":"http://p4.music.126.net/_TfwkgRjyBDujjBznOczXQ==/109951165722650100.jpg?param=300y300","url":""},

{"id":1303289043,"name":"囍（Chinese Wedding）","artist":"葛东琪","album":"囍（Chinese Wedding）","source":"netease","url_id":1303289043,"pic_id":null,"lyric_id":1303289043,"pic":"http://p3.music.126.net/H3Q3SeMVtuHvHY2uyaQdOw==/109951163472855051.jpg?param=300y300","url":""},

{"id":554241732,"name":"我的名字","artist":"焦迈奇","album":"我的名字","source":"netease","url_id":554241732,"pic_id":null,"lyric_id":554241732,"pic":"http://p3.music.126.net/Ppzb5LV4l9R-yki1BQQB0A==/109951166267072680.jpg?param=300y300","url":""},

{"id":30431367,"name":"走马","artist":"陈粒","album":"如也","source":"netease","url_id":30431367,"pic_id":null,"lyric_id":30431367,"pic":"http://p4.music.126.net/VuJFMbXzpAProbJPoXLv7g==/7721870161993398.jpg?param=300y300","url":""},

{"id":1336856777,"name":"我曾","artist":"隔壁老樊","album":"我曾","source":"netease","url_id":1336856777,"pic_id":null,"lyric_id":1336856777,"pic":"http://p4.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg?param=300y300","url":""},

{"id":569200210,"name":"给你给我","artist":"毛不易","album":"平凡的一天","source":"netease","url_id":569200210,"pic_id":null,"lyric_id":569200210,"pic":"http://p3.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=300y300","url":""},

{"id":480580003,"name":"再也没有","artist":"永彬Ryan.B","album":"再也没有","source":"netease","url_id":480580003,"pic_id":null,"lyric_id":480580003,"pic":"http://p4.music.126.net/B7MRU9cieODaInnwzyLwYQ==/18771962022944662.jpg?param=300y300","url":""},

{"id":1890714308,"name":"水中花","artist":"郁可唯","album":"时光音乐会 第2期","source":"netease","url_id":1890714308,"pic_id":null,"lyric_id":1890714308,"pic":"http://p3.music.126.net/rxBbH4p-3rt8DMvaU5M8jw==/109951166567127803.jpg?param=300y300","url":""},

{"id":1811459887,"name":"千千万万","artist":"深海鱼子酱","album":"千千万万","source":"netease","url_id":1811459887,"pic_id":null,"lyric_id":1811459887,"pic":"http://p3.music.126.net/xdegZlt9xmez_MxuH_PzXA==/109951165623999837.jpg?param=300y300","url":""},

{"id":1363642136,"name":"哪里都是你2.0","artist":"队长","album":"哪里都是你2.0","source":"netease","url_id":1363642136,"pic_id":null,"lyric_id":1363642136,"pic":"http://p4.music.126.net/dcPHOdEv_27Xk56CDBox4w==/109951164055238135.jpg?param=300y300","url":""},

{"id":133998,"name":"老街","artist":"李荣浩","album":"小黄","source":"netease","url_id":133998,"pic_id":null,"lyric_id":133998,"pic":"http://p4.music.126.net/fZFrplIVrHMx4lvgdqiIHQ==/42880953496261.jpg?param=300y300","url":""},

{"id":1808078153,"name":"沈园外","artist":"阿YueYue","album":"沈园外","source":"netease","url_id":1808078153,"pic_id":null,"lyric_id":1808078153,"pic":"http://p3.music.126.net/71-o5KBigt8HB4G9ZU2CgQ==/109951165589669156.jpg?param=300y300","url":""},

{"id":346576,"name":"光辉岁月","artist":"Beyond","album":"光辉岁月十五年","source":"netease","url_id":346576,"pic_id":null,"lyric_id":346576,"pic":"http://p3.music.126.net/JOJvZc_7SqQjKf8TktQ_bw==/29686813951246.jpg?param=300y300","url":""},

{"id":26060065,"name":"Counting Stars","artist":"OneRepublic","album":"Native (Deluxe Version)","source":"netease","url_id":26060065,"pic_id":null,"lyric_id":26060065,"pic":"http://p4.music.126.net/-7ks4d-7VgRSa03oKmNP5g==/109951166116113169.jpg?param=300y300","url":""},

{"id":1476239407,"name":"所念皆星河","artist":"房东的猫","album":"所念皆星河","source":"netease","url_id":1476239407,"pic_id":null,"lyric_id":1476239407,"pic":"http://p4.music.126.net/JtevaRk1N7ecpmwZCIvwzQ==/109951165293262893.jpg?param=300y300","url":""},

{"id":1893308058,"name":"秒针 (Dj版)","artist":"阿梨粤","album":"秒针","source":"netease","url_id":1893308058,"pic_id":null,"lyric_id":1893308058,"pic":"http://p4.music.126.net/KOc728F6RYUoa4D41c4pZA==/109951166605308483.jpg?param=300y300","url":""},

{"id":298258,"name":"吴哥窟","artist":"吴雨霏","album":"我本人","source":"netease","url_id":298258,"pic_id":null,"lyric_id":298258,"pic":"http://p3.music.126.net/-U2K8GKlASCSXK0cRre1gA==/109951163188718762.jpg?param=300y300","url":""},

{"id":1313354324,"name":"出山","artist":"花粥","album":"粥请客（四）","source":"netease","url_id":1313354324,"pic_id":null,"lyric_id":1313354324,"pic":"http://p3.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg?param=300y300","url":""},

            {
                id: "2a24dea6c74884195fe5b9732fd95ca8",
                name: "小幸运",
                artist: "金玟岐",
                album: "金玟岐翻唱作品集",
                source: "kugou",        // 酷狗
                url_id: "2a24dea6c74884195fe5b9732fd95ca8",
                pic_id: "2a24dea6c74884195fe5b9732fd95ca8",
                lyric_id: "2a24dea6c74884195fe5b9732fd95ca8",
                pic: "http://singerimg.kugou.com/uploadpic/softhead/400/20161226/20161226105135733.jpg",
                url: ""     // 酷狗的外链有效期较短，插入时 url [必须]设置空值，播放时再临时抓取
            },
        ]
    },
    // 方式二：直接提供网易云歌单ID
    {
        id: 440103454   // 网易云歌单ID
    }   // 播放列表的最后一项大括号后面不要加逗号
];