const images = () => {
  const imagesParent = document.querySelector(".works");
  const popup = document.createElement("div");

  imagesParent.append(popup);
  popup.classList.add("popup");

  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
  popup.style.display = "none";

  const currentImg = document.createElement("img");
  popup.append(currentImg);

  imagesParent.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target && e.target.classList.contains("preview")) {
      const path = e.target.parentNode.getAttribute("href");
      currentImg.setAttribute("src", path);
      popup.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
    if (e.target && e.target.classList.contains("popup")) {
      popup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default images;
