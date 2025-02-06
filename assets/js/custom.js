document.addEventListener("DOMContentLoaded", function() {
  // 读取 localStorage 中保存的主题设置
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  
  // 获取侧边切换按钮
  var themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    // 根据当前主题设置按钮图标（暗色模式下显示太阳，亮色模式下显示月亮）
    if (document.body.classList.contains("dark-mode")) {
      themeToggleButton.textContent = "☀";
    } else {
      themeToggleButton.textContent = "☾";
    }
    
    // 点击按钮切换主题
    themeToggleButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "☀";
      } else {
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "☾";
      }
    });
  }
});
