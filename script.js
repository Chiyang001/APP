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
