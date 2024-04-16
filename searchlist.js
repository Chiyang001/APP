
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



             // ——————————更多——————————示例：{ name: '', description: '' , downloadUrl: '' }, 
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
