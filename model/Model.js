class Model {
  #list = [];
  constructor() {
    this.#feltolt();
  }

  #feltolt() {
    for (let i = 0; i < 9; i++) {
      let szam = Math.floor(Math.random() * 2);
      this.#list[i] = szam;
      console.log(this.#list);
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
}

export default Model;
