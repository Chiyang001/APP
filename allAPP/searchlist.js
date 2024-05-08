
	      document.addEventListener('DOMContentLoaded', (event) => {
        let products = [

      { name: '腕上哔哩', description: '能正常观看视频和观看弹幕，还可以缓存视频哦~', downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-J1Oph.html' },
      { name: '抬腕文件', description: '可以浏览儿童手表中的文件，但是不支持传输功能' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-w1Oph.html' },
      { name: '抬腕文件-传输', description: '支持浏览手表中本地文件，支持局域网传输文件' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-M1Oph.html' },
      { name: '抬腕视频', description: '查找手表中的本地视频文件，支持快捷选项，支持查找网络上的视频' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-a1Oph.html' }, 
      { name: '抬腕笔记', description: '手表上面可以记录笔记，还有隐私模式保护笔记安全，支持和手机连接' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-I1Oph.html' }, 
      { name: '抬腕百宝箱', description: '可以玩石头剪刀布，找小鸡，bmi指数转换，二维码生成等小功能' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-g1Oph.html' }, 
      { name: '内存清理', description: '界面简洁，点击一下按钮就可以清理所有的后台应用及其缓存，支持进入应用自动清理' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-p1Oph.html' }, 
      { name: 'rarebox', description: '一款手表上也能玩机的应用，可以在手表上对其进行adb命令控制，修改屏幕分辨率，dpi等等' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-x1Oph.html' }, 
      { name: 'Kimi', description: '国内人工智能模型应用，在手表上也能够体验GPT的强大' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-41Oph.html' }, 
      { name: 'shizuku', description: '为其他的应用获取adb权限，在手表上也能够尽情玩机' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-11Oph.html' }, 
      { name: '谷歌浏览器', description: '在手表上也能够看网页无广告纯净版，不过下载之后可能需要设置一下dpi才能够正常显示' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-m1Oph.html' }, 
      { name: '哔哩终端', description: '在手表上也能够尽情刷B站，看评论，还支持登录自己的账号同步账号信息' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-f1Oph.html' }, 
      { name: '唯趣应用商店', description: '下载各类的适配手表的应用，应用十分丰富' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-Y1Oph.html' }, 
      { name: '2048', description: '2048就是2048！！' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-G1Oph.html' }, 
      { name: '抖音', description: '手表上刷短视频，同桌直接羡慕死！！' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-P1Oph.html' }, 
      { name: '爱科蓝', description: '一款手表表盘的启动器，建议先把系统桌面冻结后使用' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-C1Oph.html' }, 
      { name: '别踩白块', description: '一款音乐游戏，支持在手表上游玩' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-W1Oph.html' }, 
      { name: '合成大西瓜', description: '一款小游戏，和2048差不多' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-s1Oph.html' }, 
      { name: 'QQ音乐', description: '和其他音乐软件一样，不需要改dpi' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-21Oph.html' }, 
      { name: '酷安', description: '开发者最喜欢的app，应用社区和讨论社区' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-n1Oph.html' }, 
      { name: '万能阅读', description: '在手表上看小说，全部都是免费的' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-X1Oph.html' }, 
      { name: '莘应用（原易档商店）', description: '一个界面简洁、兼容性高的应用商店完全兼容4x 3p最新版本1.4' , downloadUrl: 'https://edsc.top/' }, 
      { name: 'CX文件管理器', description: '一款文件管理的应用' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-F4Oph.html' }, 
      { name: 'APK tool M', description: '一个在手表上独立签名的应用' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-U4Oph.html' }, 
      { name: '安装狮', description: '配合shizuku使用使用前必须安装' , downloadUrl: 'https://www.123pan.com/s/Xnh7Vv-g4Oph.html' }, 
      { name: '植物大战僵尸（已改右滑）', description: '可怕的僵尸即将入侵你的家，唯一的防御方式就是你栽种的植物！' , downloadUrl: 'https://www.123pan.com/s/aJY1jv-UEv4H.html' }, 
      { name: '磁吸桌面安装全家桶', description: '手表桌面，简洁好用' , downloadUrl: 'https://www.123pan.com/s/aJY1jv-WEv4H.html' }, 
      { name: '自主安装应用全家桶', description: '可以让手表自主安装应用哦！~' , downloadUrl: 'https://www.123pan.com/s/aJY1jv-XEv4H.html' }, 
      { name: 'Open Camera', description: '一个在手表上使用的第三方相机完美兼容' , downloadUrl: 'https://www.123pan.com/s/aJY1jv-Tav4H.html' }, 
      { name: 'ShizukuRunner', description: '一个在手表上使用的命令需要配合Shizuku' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/67ecba48dd628559e9bc166c5ee00cd0.apk' }, 
      { name: '无障碍管理器', description: '一个在手表上使用的无障碍管理器需要配合Shizuku进行使用' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/9e5885c64d2aa1391bed973d5434556f.apk' }, 
      { name: '元气骑士', description: '[已改右滑]探索地牢，收集各种奇异的武器，然后丧心病的战爆小怪兽！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/4590ae07af47392f502837406113efd0.apk' }, 
      { name: '我的世界', description: '[已改右滑]一款沙盒游戏，拥有丰富的游戏内容，版本为1.16地狱大更新！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/eac4cefc24b39e75fcaae477320c1246.apk' }, 
      { name: '文件管理器', description: '支持文件的复制、粘贴、移动、压缩、解压缩等等' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/79ecc2178bbfd7886a3f7de3c90ef574.apk' }, 
      { name: '计算器', description: '简便计算器' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/733501e9507d60937e131bc5b8f28da2.apk' }, 
      { name: '斗地主', description: '单人斗地主，没有网，也能玩！！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/a052c70c43277d995ebc532483d4682c.apk' }, 
      { name: '登山赛车', description: '[已改右滑]经典游戏，超有趣超虐心的赛车竞速游戏！基于真实赛车物理特性开发，仅需两键就能驰骋各类特色赛道' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/6591a4902f5bad20d6e4ac2e81d37941.apk' }, 
      { name: '地铁跑酷', description: '[已改右滑]这款流行的休闲跑酷游戏，让你的角色尽享各种乐趣；众多炫酷的动画效果在这里一一呈现' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/4287b9c497a8041d4e979f8666636895.apk' }, 
      { name: 'App Cloner', description: 'App Cloner是一款拥有多种功能的应用！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/468ce37416ef5babcad726f527d79762.apk' }, 
      { name: '讯飞输入法手表版', description: '一款全新的智能手表输入法,它针对智能手表用户打造,可以轻松输入文字,并且界面图标清晰明了,非常适合手腕操作。且支持多种输入方式', downloadUrl: 'https://fel.forxhr.top:2022/down.php/7e3a61d2ca0dc1498ac1a1a60339951c.apk' },
      { name: 'AIDA64', description: '一款硬件检测工具软件，它可以对手表进行详细的硬件检测,包括CPU、内存、电池、屏幕、传感器、网络等多种功能，并且它提供的参数都非常细致。', downloadUrl: 'https://fel.forxhr.top:2022/down.php/d9777a5216aa28d0144319ee71baed10.apk' },
      { name: '弓箭手大作战', description: '[已改右滑]一款超爽的多人射击类游戏；游戏支持人机对战，也可以进行多人在线联网对战；游戏操作简单，玩法新颖，让人欲罢不能！', downloadUrl: 'https://fel.forxhr.top:2022/down.php/e30f2e66ce4e14ec470a42d9164d2226.apk' },
      { name: 'DryLake24', description: '[已改右滑]在游戏中玩家要控制自己的机甲在干涸的湖泊上与敌人战斗。玩家控制的机甲不仅能射击、奔跑还可以侧滑或是紧急回转', downloadUrl: 'https://fel.forxhr.top:2022/down.php/220f3f86dbd96db9652947cd5caffa33.apk' },
      { name: 'Hankmi应用商店', description: '这里拥有非常多适合手表使用的软件，可以选择应用源，且软件拥有快速搜索引擎，对应用名称、简介、模糊搜索都能秒出结果', downloadUrl: 'https://fel.forxhr.top:2022/down.php/6f4bffcc32420f279e2885014bea9d87.apk' },
      { name: "Shattered Pixel Dung", description: "一款好玩的地牢冒险游戏，经典像素风格，感受怀旧的闯关乐趣，不断获取各种的道具，解决不同难题，让自己存活下来并迎接全新的挑战！", "downloadUrl": "https://fel.forxhr.top:2022/down.php/dddc818e8b3b031335ef00b67ceaafbc.apk" },
      { name: "Temple Run 2", description: "游戏操作简单易懂，只需要一只手就能玩，轻松即可上手，但是又如此困难，任何一个失误都能让你从头再来，而游戏过程却又如此刺激，让人欲罢不能，你只能不断的往前逃亡逃避抓捕，道路却仿佛没有尽头", "downloadUrl": "https://fel.forxhr.top:2022/down.php/200a02c33507e7f0cceaec9eff5b876c.apk" },
      { name: "Tic Tac Toe", description: "一款画风非常简约的对战类益智休闲手游，游戏充满了霓虹灯色彩，多种模式供玩家选择，你可以对电脑AI对战也可以与你的小伙伴展开一场益智对战", "downloadUrl": "https://fel.forxhr.top:2022/down.php/f71b0c2f0dc0feb1ae7bdf17a8456abb.apk" },
      { name: "UC浏览器", description: "内置多个搜索引擎可以快速切换,线上还能直接复制粘贴网址快速进入相关的网站,也能进行无痕浏览,帮助用户保护自己的隐私", "downloadUrl": "https://fel.forxhr.top:2022/down.php/6e407ceb3acfeeb75642e6b016be42ca.apk" },
      { name: "创建快捷方式", "description": "在手表上也可以查看应用的包名，活动列表等", "downloadUrl": "https://fel.forxhr.top:2022/down.php/86f1e557ed70489ffac3f125db5936e4.apk" },
      { name: '魔法少女小圆之晓美焰', description: '一款动作冒险类游戏,根据同名ip所改编的同人小游戏,超解压的玩法模式等你来挑战,日系画风完美呈现,操作起来轻松便捷,给玩家带来无限的游戏体验', downloadUrl:'https://fel.forxhr.top:2022/down.php/827786e4b248f5a83d366f923ac23676.apk' },
      { name: '墨迹天气（圆屏）', description: '此版本适配圆屏智能手表，墨迹天气提供天气预报、空气质量监测、短时气候预报、生活指数服务等功能', downloadUrl: 'https://fel.forxhr.top:2022/down.php/56ef712689881e88b820e6ae15b10c38.apk' },
      { name: '双人游戏', description: '[已改右滑]拥有超多游戏等你来玩！可以双人对决，也可以人机对决，超好玩，根本停不下来！！', downloadUrl: 'https://fel.forxhr.top:2022/down.php/96c1f973ce5cda5aab15b7c0205ac9b7.apk' },
      { name: '小趣商店', description: '一款很实用的应用商店软件,超多功能,而且还拥有海量的应用软件和游戏,让你的手表跟手机一样方便！！', downloadUrl: 'https://fel.forxhr.top:2022/down.php/65fb3ae7389975e6cc995938576829ee.apk' },
      { name: '羊了个羊3D', description: '羊了个羊3D中直接分为了两种模式，一种是普通模式，一种是玩梗模式。不同的模式中将会给你带来很多乐趣。', downloadUrl: 'https://fel.forxhr.top:2022/down.php/b11d2e79bb5d8b8cf3205cd71539f9cf.apk' },
      { name: '真实汽车驾驶模拟器', description: '[已改右滑]清晰的3D画面和一比一还原的驾驶界面让人身临其境,硬核的驾驶过程和第一人称视角也让游戏更具可玩性', downloadUrl: 'https://fel.forxhr.top:2022/down.php/368691ffa01977fc6d15983f80a20248.apk' },
      { name: 'Win98模拟器', description: '[已改右滑][已汉化]win98模拟器电脑版是一款模拟win98系统的手机游戏，你可以在win98模拟器中文版最新版PC版里玩到很多童年的游戏比如扫雷纸牌等！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/6071c51475816ba91bcfef93bfa4e2a8.apk' },
      { name: '跳动的线', description: '玩家需跟随音乐节奏点击，使线条转向，指引线条躲避障碍，到达终点。游戏内包含各种场景，音乐会和不同场景混合，每个关卡皆有特色' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/e74a3de0668343c4c6f7708bed188fde.apk' },
      { name: '夜间屏幕', description: '你是否进经历过晚上玩表时却因为太亮而闪的眼睛痛，这款应用可以帮助你，可以强制亮度，妈妈再也不用担心我晚上玩表被闪到眼睛了' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/e622fc3dd300c6c570b20c8564ff2ff9.apk' }, 
      { name: '电子木鱼', description: '功德+1 功德+1' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/f9b15b4a6fdf142331711ca6bec82f17.apk' }, 
      { name: '倒数日', description: '倒数日 是一个帮你记录生活中重要日子的小工具，例如:恋人生日还有多少天？还信用卡还有多少天？发工资还有多少天？距离世界末日还有多少天……' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/3a9cf5cc6c562dcb8b7c1b0d2d3c3245.apk' }, 
      { name: '跑跑卡丁车', description: '[已改右滑]游戏以卡通风格的卡丁车为主题，简单易上手，多样的赛车和场景，丰富的游戏模式，玩家需要驾驶卡丁车进行赛车竞速，完成各种任务和挑战，感兴趣的下载玩玩吧！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/73aa1dafadcbd4022a80853303424ad2.apk' }, 
      { name: '几何战机2', description: '[已改右滑]多元新鲜玩法精彩纷呈：超视距攻击、魔鬼训练、精英改造、神秘技能、配件大师、后备支援，全新概念战力爆表由此开启！奇思妙想养成专属战机，超多制胜方法等你一手掌控！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/e143a7390932b8783ccc18a1a9653d84.apk' }, 	
      { name: '答案之书', description: '在你感觉时间正确的时候，按下按钮，你要寻找的答案就在那里。 遇到任何问题，你都可以打开它。 获取答案 你的答案是 再尝试一次' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/4a3801d8a8d514578d220d3dda77b163.apk' }, 	
      { name: 'Dungeon Cards', description: '这是一款难以定义游戏类型的魔性卡牌游戏，它披着卡牌的外衣，具备时下最流行的像素风，又有着RPG的元素，甚至还有中国最古老的益智游戏华容道的影子，第一次玩就让你欲罢不能！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/ee5444833c48cb7f16c29528c611814a.apk' }, 	
      { name: '番茄时钟', description: '真正有效的时间管理方法并非一味地压抑本能，而是会以一种顺应人性的方式引导我们提高效率。番茄工作法正是如此。' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/cccbb8ceeab68ecab68d53c4c46d1cc9.apk' }, 	
      { name: '教育中心', description: '可以卡顿的最后一个版本' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/524c2e41c7498407eb28accf07308be0.apk' }, 
      { name: 'QQ', description: '[可打字]可以打字的QQ，已去签名效验' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/c2cf6b5d0af73e5874d7f72a0d2605fb.apk' }, 
      { name: '铁锈战争', description: '[已改右滑]你可以创建属于你的沙盒，并和你的同伴在其中游戏，玩家可以控制多个目标，在不同的地图开战，不仅可以多线操作，甚至可以精确到单兵作战' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/c429bc9a5797ddf01bba3b7a41b9a2f1.apk' }, 
      { name: '谷歌输入法', description: '这款输入法支持26键打字，还支持滑笔打字' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/0a862dc815e2261f6fb82657cbeb35c9.apk' }, 
      { name: '兜兜龙', description: '[已改右滑]兜兜龙就是兜兜龙！！' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/1cb302caf13df278c93f1b282bdc6dfa.apk' }, 
      { name: '狂野飙车5', description: '[已改右滑]非常好的一款赛车游戏，通过倾斜来改变方向！不过在手表上玩要注意，往前倾斜是左，往后倾斜是右，不知道是不是陀螺仪有问题' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/b1c5c2d1f692acb18818dff01df69e63.apk' }, 
      { name: 'ES文件浏览器 pro版', description: '[已改dpi]ES文件浏览器的专业版' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/297fd48551f26e7500762d333da066de.apk' },
      { name: 'UP助手', description: '实时粉丝数查询' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/9d949c6b533ed2dfdaf5e678897f8bc7.apk' },
      { name: '雷霆赛车2', description: '[横屏]雷霆赛车2最新版又名Raging Thunder 2，这是一款惊险刺激的3d赛车竞技游戏，采用重力感应操作，点击屏幕中左侧的闪电符号启动液氮加速。' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/52ff5178abf940896f800fdb477f9e56.apk' }, 
      { name: '谷歌小恐龙', description: '谷歌小恐龙' , downloadUrl: 'https://fel.forxhr.top:2022/down.php/eb06dadcb85eafd78141bdb94b3b3ad2.apk' }, 



		
		
             // ——————————更多——————————示例：      { name: '', description: '' , downloadUrl: '' }, 
        ];
	

	// 获取页面元素
        let searchInput = document.getElementById('searchInput');
        let searchButton = document.getElementById('searchButton');
        let searchResults = document.getElementById('searchResults');

        // 页面加载时清空搜索结果
        searchResults.innerHTML = '';

        // 监听搜索按钮点击事件
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm === '') {
                searchResults.innerHTML = '';
                return;
            }
            const filteredProducts = filterProducts(searchTerm);
            displayResults(filteredProducts);
        });

        // 过滤应用函数
        function filterProducts(searchTerm) {
            return products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm)
            );
        }

        // 显示搜索结果
        function displayResults(filteredProducts) {
            searchResults.innerHTML = '';
            if (filteredProducts.length === 0) {
                searchResults.innerHTML = '<li>没有找到匹配的结果。</li>';
            } else {
                filteredProducts.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<strong>${product.name}</strong> - 描述：${product.description} - <button-search><a href="${product.downloadUrl}" target="_blank">下载</a></button-search>`;
                    searchResults.appendChild(listItem);
                });
            }
        }
    });
