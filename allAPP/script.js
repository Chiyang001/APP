//应用分类&应用分页
document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('category');
    var appsContainer = document.getElementById('appsContainer');
    var appContainer = document.querySelector('.app-container.single-column');
    var apps = Array.from(appsContainer.getElementsByClassName('app'));
    let filteredApps = apps;
    const itemsPerPage = 6;
    let currentPage = 1;
    let totalPages = Math.ceil(apps.length / itemsPerPage);

    // 分页按钮点击事件处理函数
    function setupPaginationButtons() {
        document.getElementById('firstPage').addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage = 1;
                renderApps();
                renderPagination();
                scrollToTop();
            }
        });

        document.getElementById('prevPage').addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderApps();
                renderPagination();
                scrollToTop();
            }
        });

        document.getElementById('nextPage').addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                renderApps();
                renderPagination();
                scrollToTop();
            }
        });

        document.getElementById('lastPage').addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage = totalPages;
                renderApps();
                renderPagination();
                scrollToTop();
            }
        });
    }

    // 根据分类筛选应用
    function filterApps() {
        const selectedCategory = selectElement.value;
        filteredApps = apps.filter(app => {
            return selectedCategory === '' || app.getAttribute('data-category') === selectedCategory;
        });
        currentPage = 1; // 筛选后重置当前页码为1
        totalPages = Math.ceil(filteredApps.length / itemsPerPage); // 重新计算总页数
        renderApps();
        renderPagination();
    }

    // 渲染应用列表
    function renderApps() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const appsToShow = filteredApps.slice(startIndex, endIndex);

        appContainer.innerHTML = ''; // 清空现有应用列表

        appsToShow.forEach(appElement => {
            const clonedAppElement = appElement.cloneNode(true);
            appContainer.appendChild(clonedAppElement); // 将克隆的应用元素添加到容器中
        });
    }

    // 滚动到顶部函数
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动
        });
    }

    // 渲染分页
    function renderPagination() {
        const paginationNumbersElement = document.getElementById('paginationNumbers');
        paginationNumbersElement.innerHTML = ''; // 清空现有分页数字按钮

        const maxPagesToShow = 3; // 最多显示的分页按钮数量
        const maxPagesToAlwaysShow = 2; // 始终显示在两端的分页按钮数量
        const startPage = Math.max(1, currentPage - maxPagesToShow);
        const endPage = Math.min(totalPages, currentPage + maxPagesToShow);

        // 添加左侧省略号按钮
        if (startPage > 1) {
            const leftEllipsis = document.createElement('span');
            leftEllipsis.textContent = '...';
            leftEllipsis.classList.add('pagination-ellipsis');
            paginationNumbersElement.appendChild(leftEllipsis);
        }

        // 添加分页数字按钮
        for (let i = startPage; i <= endPage; i++) {
            const numberButton = document.createElement('button');
            numberButton.textContent = i;
            if (i === currentPage) {
                numberButton.classList.add('active');
            }
            numberButton.addEventListener('click', function() {
                currentPage = i;
                renderApps();
                renderPagination();
            });
            paginationNumbersElement.appendChild(numberButton);
        }

        // 添加右侧省略号按钮
        if (endPage < totalPages) {
            const rightEllipsis = document.createElement('span');
            rightEllipsis.textContent = '...';
            rightEllipsis.classList.add('pagination-ellipsis');
            paginationNumbersElement.appendChild(rightEllipsis);
        }
    }

    // 初始化事件监听器和应用列表
    setupPaginationButtons();
    selectElement.addEventListener('change', filterApps);
    renderApps();
    renderPagination();
});

//  ————停—————



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
