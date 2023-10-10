class Model {
  #list = [];
  constructor() {
    this.feltolt();
  }

  feltolt() {
    for (let i = 0; i < 9; i++) {
      let szam = Math.floor(Math.random() * 2);
      this.#list[i] = szam;
    }
  }


  getList() {
    return this.#list;
  }

  getListI(i) {
    return this.#list[i];
  }

  setAllapot(i) {
    if (this.#list[i] == 1) {
      this.#list[i] = 0;
    } else {
      this.#list[i] = 1;
    }
  }
  

  setSzomszed(i) {
    const szomszedFelsoSor = i > 5 ? i : i + 3;
    const szomszedAlsoSor = i < 3 ? i : i - 3;
    const szomszedBal = i % 3 == 0 ? i : i - 1;
    const szomszedJobb = i % 3 == 2 ? i : i + 1;
    const szomszedok = [
      szomszedFelsoSor,
      szomszedAlsoSor,
      szomszedBal,
      szomszedJobb,
      i,
    ];
    for (const szomszed of szomszedok) {
      if (szomszed !== null) {
        this.setAllapot(szomszed);
      }
    }
  }
}

export default Model;
