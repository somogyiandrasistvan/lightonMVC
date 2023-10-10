import LampaElem from "../view/LampaElem.js";

class Lampak {
  constructor(szuloElem, lista) {
    for (let i = 0; i < 9; i++) {
      new LampaElem(szuloElem, i, lista[i]);
    }
  }
}

export default Lampak;
