const featuresDrop = document.querySelector("#featuresDrop");
const featuresIcon = document.querySelector("#featuresIcon");
const companyDrop = document.querySelector("#companyDrop");
const companyIcon = document.querySelector("#companyIcon");

function mudarIcone(bi) {
    bi.classList.toggle("bi-chevron-up");
    bi.classList.toggle("bi-chevron-down");
}
featuresDrop.addEventListener("click", () => {
        mudarIcone(featuresIcon);
});

companyDrop.addEventListener("click", ()=>{
    mudarIcone(companyIcon);
})