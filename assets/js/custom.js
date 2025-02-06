document.addEventListener("DOMContentLoaded", function() {
  // 如果 localStorage 中保存的主题为暗色，则添加 dark-mode 类
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  
  var themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    // 设置按钮图标：暗色模式下显示太阳（代表切换为亮色），亮色模式下显示月亮
    if (document.body.classList.contains("dark-mode")) {
      themeToggleButton.textContent = "☀";
    } else {
      themeToggleButton.textContent = "☾";
    }
    
    // 点击切换主题
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
