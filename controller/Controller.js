import Model from "../model/Model.js";
import Lampak from "../view/Lampak.js";

class Controller {
  constructor() {
    const MODEL = new Model();
    const LAMPAK = new Lampak($(".elemek"), MODEL.getList());

    $(window).on("kattint", (event) => {
      console.log(event.detail);
      MODEL.setAllapot(event.detail.i);
      $(".elemek").empty();
      new Lampak($(".elemek"), MODEL.getList());
    });
  }
}

export default Controller;
