const forms = () => {
  const form = document.querySelectorAll(".form");
  const inputs = document.querySelectorAll(".form_input");
  const phoneInputs = document.querySelectorAll("input[name='user_phone']");

  phoneInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });

  const messages = {
    load: "Загрузка...",
    ok: "Спасибо, мы с вами свяжемся",
    error: "Что-то пошло не так...",
  };
  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };
  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      let infoMessage = document.createElement("div");
      infoMessage.classList.add("status");
      infoMessage.textContent = messages.load;
      item.append(infoMessage);

      const formdata = new FormData(item);
      postData("assets/server.php", formdata).then((data) => {
        console.log(data);
        infoMessage.textContent = messages.ok;
        setTimeout(() => {
          infoMessage.remove();
        }, 5000);
      });
      clearInputs();
    });
  });
};
export default forms;
