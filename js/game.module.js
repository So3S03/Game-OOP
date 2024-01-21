import { category } from "./ui.module.js";
import { Details } from "./details.module.js";
import { loadingPage } from "./index.js";
let showData = document.querySelector("#showData")
export class GetData {
    async data() {
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7a9d5e28a7mshc5f69409c84d692p11c9a7jsn6d773e8a98ab',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let Req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        let ResponseData = await Req.json();
        let temp1 = ``
        ResponseData.forEach(element => {
            let { title, thumbnail, short_description, platform, id, genre } = element;
            temp1 += `<div class="col-lg-3">
            <div class="card bg-transparent px-3 pt-3 pb-0 text-light clickToShow" data-id="${id}">
                <img src="${thumbnail}" class="card-img-top rounded-top-2" alt=".test"/>
                <div class="card-body m-0 p-0">
                    <div class="card-title d-flex justify-content-between my-3 align-items-center">
                        <p class="m-0 p-0">${title}</p>
                        <span class="text-bg-primary p-1 rounded-1">Free</span>
                    </div>
                    <p class="card-text text-secondary overflow-hidden h-42">${short_description.split(" ", 8).join(" ")}</p>
                    <div class="d-flex justify-content-between align-items-center pt-2 border-top border-dark">
                        <p class="text-bg-dark px-2 rounded-1 text-center">${genre}</p>
                        <p class="text-bg-dark px-2 rounded-1 w-42 text-center">${platform}</p>
                    </div>
                </div>
            </div>
        </div>`
        });
        showData.innerHTML = temp1
        loadingPage.style.display = `none`
        let detailsData = new Details();
        detailsData.display()
    }
}




