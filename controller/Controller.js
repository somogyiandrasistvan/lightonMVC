import Model from "../model/Model.js";
import Lampak from "../view/Lampak.js";
import Megjelenit from "../view/Megjelenit.js";

class Controller {
  constructor() {
    const MODEL = new Model();
    const LAMPAK = new Lampak($(".elemek"), MODEL.getList());
    const MEGJELENIT = new Megjelenit($(".reset"));

    $(window).on("kattint", (event) => {
      MODEL.setAllapot(event.detail.i);
      MODEL.setSzomszed(event.detail.i);
      $(".elemek").empty();
      new Lampak($(".elemek"), MODEL.getList());
      MEGJELENIT.kattintas++;
      MEGJELENIT.kattintasNovelo();
    });

    $(window).on("gomb", () => {
      MODEL.feltolt();
      $(".elemek").empty();
      MEGJELENIT.kattintas = 0;
      new Lampak($(".elemek"), MODEL.getList());
      MEGJELENIT.kattintasNovelo();
    });
  }
}

export default Controller;
