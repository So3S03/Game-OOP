import { loadingPage } from "./index.js";
export class Details {
    async detailsData(id) {

        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7a9d5e28a7mshc5f69409c84d692p11c9a7jsn6d773e8a98ab',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)

        let detailsArr = await req.json()
        return detailsArr
    }

    display() {
        let details = document.querySelector("#showDetails")
        let temp2 = ``;
        let card = Array.from(document.querySelectorAll(".clickToShow"))

        card.forEach(e => {
            e.addEventListener("click", async () => {
                loadingPage.style.display = "flex"
                details.classList.remove("d-none")
                let id = e.getAttribute("data-id");
                let arr = await this.detailsData(id)
                let { title, thumbnail, status, platform, genre, game_url, description } = arr;

                temp2 = `<div class="w-85 mx-auto my-4">
                <div
                    class="w-100 d-flex justify-content-between align-items-center text-light mb-2 flex-wrap"
                >
                    <h3>Details Game</h3>
                    <i class="fa-solid fa-xmark fa-2xl close-btn"></i>
                </div>
                <div
                    class="w-100 d-flex justify-content-between align-items-start text-light flex-wrap"
                >
                    <div class="w-35 w-r-90 mb-3">
                    <img src="${thumbnail}" alt="photo" class="w-100" />
                    </div>
                    <div class="w-60 w-r-90">
                    <h3 class="mb-2">Title: ${title}</h3>
                    <p>
                        Category:
                        <span class="text-bg-info px-1 rounded-1 fs-6">${genre}</span>
                    </p>
                    <p>
                        platform:
                        <span class="text-bg-info px-1 rounded-1 fs-6">${platform}</span>
                    </p>
                    <p>
                        Status:
                        <span class="text-bg-info px-1 rounded-1 fs-6">${status}</span>
                    </p>
                    <p>
                        ${description}
                    </p>
                    <a class="btn btn-outline-warning text-light text-decoration-none" href="${game_url}" target="_blank">
                        Show Game
                    </a>
                    </div>
                </div>
                </div>
                        `;
                details.innerHTML = temp2
                let closeBtn = document.querySelector(".close-btn")
                closeBtn.addEventListener("click", () => {
                    details.classList.add("d-none")
                })
                loadingPage.style.display = "none"
            })
        })

    }
}

