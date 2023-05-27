const tabs = (
  headerSelector,
  contentSelector,
  tabSelector,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSelector);
  const contents = document.querySelectorAll(contentSelector);
  const tabs = header.querySelectorAll(tabSelector);

  function hideContent() {
    contents.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showContent(i = 0) {
    contents[i].style.display = display;
    tabs[i].classList.add(activeClass);
  }

  hideContent();
  showContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    const tabClass = tabSelector.replace(/\./, "");

    if (
      target.classList.contains(tabClass) ||
      target.parentNode.classList.contains(tabClass)
    ) {
      e.preventDefault();
      tabs.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
};
export default tabs;
