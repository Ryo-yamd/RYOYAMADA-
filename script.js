// 平滑滚动 - 修正事件绑定
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) { // 增加判断，避免找不到元素报错
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 页面加载提示（可选）
window.addEventListener('load', function() {
    console.log('简历网站加载完成！'); // 用控制台输出替代alert，更友好
});