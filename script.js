//应用分类js

document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('category');
    var apps = document.querySelectorAll('.app');

    selectElement.addEventListener('change', function() {
        var selectedCategory = this.value;
        apps.forEach(function(app) {
            if (app.getAttribute('data-category') === selectedCategory || selectedCategory === '') {
                app.style.display = 'block'; // 显示对应分类的app
            } else {
                app.style.display = 'none'; // 隐藏不符合分类的app
            }
        });
    });
});




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
    var appContainer = document.querySelector('.app-container');
    var toggleButton = document.getElementById('toggleButton');
    if (appContainer.classList.contains('single-column')) {
        appContainer.classList.remove('single-column');
        appContainer.classList.add('four-column');
        toggleButton.textContent = '切换至手机视图';
    } else if (appContainer.classList.contains('four-column')) {
        appContainer.classList.remove('four-column');
        toggleButton.textContent = '切换至手表视图';
    } else {
        appContainer.classList.add('single-column');
        toggleButton.textContent = '切换至多列电脑视图';
    }
}

        




function startAnimation(dot) {

    // 应用动画
    dot.style.animation = `move-dot 9s linear infinite, size-dot 5s ease-in-out infinite`;
}

function stopAnimation(dot) {
    dot.style.animation = 'none'; // 停止动画
}

// 点击应用容器时启动动画
// 鼠标进入应用容器时启动动画
document.querySelectorAll('.app').forEach(app => {
    app.addEventListener('mouseenter', function() {
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

document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.getElementById('nav-list');
    if (nav.style.left === '0px') {
        nav.style.left = '-100%';
    } else {
        nav.style.left = '0px';
    }
});
