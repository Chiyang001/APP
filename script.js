function downloadApp(downloadUrl) {
    // 创建一个隐藏的<a>元素
    var link = document.createElement("a");
    link.style.display = "none";
    link.href = downloadUrl;
    // 可以选择设置下载的文件名
    // link.download = "app"; 
    // 将<a>元素添加到文档中
    document.body.appendChild(link);
    // 模拟点击<a>元素以触发下载
    link.click();
    // 清理添加的<a>元素
    document.body.removeChild(link);
}

function toggleLayout() {
            var container = document.querySelector('.app-list');
            container.classList.toggle('single-column');
        }
        
function showVideo() {
    var videoContainer = document.querySelector('.video-container');
    var watchTutorialButton = document.getElementById('watchTutorialButton');
    var videoPlayer = document.getElementById('videoPlayer');
    var videoFrame = document.getElementById('videoFrame');
    
    // 设置视频播放器的 src 属性
    videoFrame.src = "https://b23.tv/bELxAlP";
    
    // 隐藏观看教程按钮，显示视频播放器
    watchTutorialButton.style.display = "none";
    videoPlayer.style.display = "block";
}

function showVideo2() {
    var videoContainer = document.querySelector('.video-container');
    var watchTutorialButton = document.getElementById('watchTutorialButton2');
    var videoPlayer = document.getElementById('videoPlayer');
    var videoFrame = document.getElementById('videoFrame');
    
    // 设置视频播放器的 src 属性
    videoFrame.src = "https://b23.tv/KlIjADS";
    
    // 隐藏观看教程按钮，显示视频播放器
    watchTutorialButton.style.display = "none";
    videoPlayer.style.display = "block";
}

function copyText() {
  var text = document.getElementById("codeToCopy").innerText; // 获取文本
  var textarea = document.createElement("textarea"); // 创建textarea元素
  textarea.value = text; // 设置textarea的值
  textarea.style.position = "fixed"; // 防止显示在页面上
  document.body.appendChild(textarea); // 将textarea加入到文档中
  
  textarea.focus();
  textarea.select(); // 选中文本
  
  try {
    var successful = document.execCommand('copy'); // 执行复制操作
    var msg = successful ? '成功复制到剪贴板' : '复制失败';
    alert(msg); // 使用alert显示消息
  } catch (err) {
    console.log('无法复制', err);
    alert('复制过程中发生错误'); // 复制失败时显示提示
  }
  
  document.body.removeChild(textarea); // 移除textarea元素
}

function startAnimation(dot) {

    // 应用动画
    dot.style.animation = `move-dot 9s linear infinite, size-dot 5s ease-in-out infinite`;
}

function stopAnimation(dot) {
    dot.style.animation = 'none'; // 停止动画
}

// 点击应用容器时启动动画
document.querySelectorAll('.app').forEach(app => {
    app.addEventListener('click', function() {
        const dot = this.querySelector('.dot');
        if (dot) {
            startAnimation(dot);
        }
    });
});

// 鼠标离开应用容器时停止动画
document.querySelectorAll('.app').forEach(app => {
    app.addEventListener('mouseleave', function() {
        const dot = this.querySelector('.dot');
        if (dot) {
            stopAnimation(dot);
        }
    });
});
