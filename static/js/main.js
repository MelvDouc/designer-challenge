const cssClasses = {
  HIDDEN: "hidden",
  ANGLE_UP: "fa-angle-up",
  ANGLE_DOWN: "fa-angle-down",
};

class LangSelector extends HTMLElement {
  #value = "FR";
  #inputEvent = new Event("input");

  constructor() {
    super();

    const valueDisplay = this.querySelector(".value-display"),
      valueElement = valueDisplay.querySelector("span"),
      icon = valueDisplay.querySelector("i");
    const optionsContainer = this.querySelector("ul.options");

    optionsContainer.addEventListener("click", ({ target }) => {
      if (!(target instanceof HTMLLIElement))
        return;
      this.value = target.innerText;
      valueElement.innerText = this.value;
    });
    this.addEventListener("click", () => {
      if (optionsContainer.classList.contains(cssClasses.HIDDEN)) {
        optionsContainer.classList.remove(cssClasses.HIDDEN);
        icon.classList.remove(cssClasses.ANGLE_DOWN);
        icon.classList.add(cssClasses.ANGLE_UP);
        return;
      }
      optionsContainer.classList.add(cssClasses.HIDDEN);
      icon.classList.remove(cssClasses.ANGLE_UP);
      icon.classList.add(cssClasses.ANGLE_DOWN);
    });

  }

  get value() {
    return this.#value;
  }

  set value(newValue) {
    this.#value = newValue;
    this.dispatchEvent(this.#inputEvent);
  }
}

customElements.define("lang-selector", LangSelector)

