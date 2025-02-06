document.addEventListener("DOMContentLoaded", function() {
  // 主题切换功能
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  
  var themeToggleButton = document.getElementById("theme-toggle");
  if (themeToggleButton) {
    // 设置按钮图标：暗色模式下显示太阳，亮色模式下显示月亮
    themeToggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀" : "☾";
    
    themeToggleButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "☀";
      } else {
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "☾";
      }
      console.log("当前主题：", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
  } else {
    console.error("未找到 id 为 theme-toggle 的按钮！");
  }
  
  // 回到顶部按钮功能
  var backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) {
        backToTopButton.parentElement.style.display = "block";
      } else {
        backToTopButton.parentElement.style.display = "none";
      }
    });
    
    backToTopButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
