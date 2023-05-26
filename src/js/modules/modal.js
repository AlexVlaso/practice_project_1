const modals = () => {
  const bindModal = (triggerSelector, modalSelector, closeSelector) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closeBtn = modal.querySelector(closeSelector);

    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = "";
        }
      });
    });
  };
  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_close");
  bindModal(".phone_link", ".popup", ".popup_close");
};
export default modals;
