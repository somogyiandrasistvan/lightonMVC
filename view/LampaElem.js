class LampaElem {
  #szuloElem;
  i;
  allapot;
  #divElem;
  constructor(szuloElem, i, allapot) {
    this.#szuloElem = szuloElem;
    this.i = i;
    this.allapot = allapot;
    this.#megjelenit();

    this.#divElem = this.#szuloElem.children("div:last-child");

    this.#divElem.on("click", () => {
      this.#kattintasTrigger("kattint");
    });
  }

  #megjelenit() {
    this.#szuloElem.append(
      `<div id=${this.i} style="${this.#szinBeallit(this.allapot)}">.</div>`
    );
  }

  #szinBeallit() {
    if (this.allapot == 1) {
      return "background:green";
    } else {
      return "background:yellow";
    }
  }

  #kattintasTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(E);
  }
}

export default LampaElem;
