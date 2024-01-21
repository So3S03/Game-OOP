import { GetData } from "./game.module.js";
export let loadingPage = document.querySelector(".loading")
export let data = new GetData()
data.data()
export function loading() {
    $(document).ready(function () {
        $(loadingPage).fadeOut(2000, function () {
            $(loadingPage).removeClass("d-flex");
        })
    })
}
loading()
