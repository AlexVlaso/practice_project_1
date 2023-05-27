"use strict";
import forms from "./modules/forms";
import modals from "./modules/modal";
import tabs from "./modules/tabs";
import "./slider";

document.addEventListener("DOMContentLoaded", () => {
  modals();
  tabs(
    ".decoration_slider",
    ".decoration_content > div > div",
    ".no_click",
    "after_click"
  );
  tabs(
    ".glazing_slider",
    ".glazing_content",
    ".glazing_block",
    "slick-current"
  );
  forms();
});
