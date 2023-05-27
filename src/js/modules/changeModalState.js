import checkNumInput from "./checkNumInput";

const changeModalState = (state) => {
  const windowTypes = document.querySelectorAll(".balcon_icons_img");
  const windowWidth = document.querySelector("#width");
  const windowHeight = document.querySelector("#height");
  const windowView = document.querySelector("#view_type");
  const windowTemp = document.querySelectorAll(".checkbox");
  checkNumInput("#width");
  checkNumInput("#height");

  const bindInput = (elem, event, prop) => {
    elem.addEventListener(event, (e) => {
      switch (elem.nodeName) {
        case "SPAN":
          state[prop] = +elem.dataset.type;
          break;
        case "SELECT":
          state[prop] = elem.value;
          break;
        case "INPUT":
          if (elem.dataset.type === "checkbox") {
            elem === windowTemp[0]
              ? (state[prop] = "Cold")
              : (state[prop] = "Hot");
            controlCheckbox(windowTemp, elem);
          } else {
            state[prop] = e.target.value;
          }

          break;
      }
      console.log(state);
    });
  };
  const bindInputs = (elems, event, prop) => {
    elems.forEach((item) => {
      bindInput(item, event, prop);
    });
  };
  const controlCheckbox = (elements, current) => {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] === current) {
        elements[i].checked = true;
        continue;
      }
      elements[i].checked = false;
    }
  };
  bindInputs(windowTypes, "click", "types");
  bindInput(windowWidth, "input", "width");
  bindInput(windowHeight, "input", "height");
  bindInput(windowView, "input", "view");
  bindInputs(windowTemp, "input", "temp");
};
export default changeModalState;
