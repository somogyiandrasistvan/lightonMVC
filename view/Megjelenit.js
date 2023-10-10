class Megjelenit {
  #szuloElem;
  #gombElem;
  kattintas = 0;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;
    this.#megjelenit();
    this.#gombElem = this.#szuloElem.children("button");
    this.pElem = this.#szuloElem.children("p");
    this.#gombElem.on("click", () => {
      this.#kattintasTrigger("gomb");
    });
  }

  #megjelenit() {
    let txt = `<button class=gomb>Restart</button>`
    txt += `<p>kattintás: ${this.kattintas}</p>`
    this.#szuloElem.append(txt);
  }

  #kattintasTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev);
    window.dispatchEvent(E);
  }

  kattintasNovelo(){
    this.pElem.html("kattintás: "+this.kattintas);
  }
}

export default Megjelenit;
