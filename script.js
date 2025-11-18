const resultDiv = document.querySelector(".result-div")
const btn = document.querySelector("button")

btn.addEventListener("click", check)

function check() {
        let matricTotal = document.querySelector("#tot-mt").value
        let matricObt = document.querySelector("#obt-mt").value
        let interTotal = document.querySelector("#tot-int").value
        let interObt = document.querySelector("#obt-int").value

        let matricPercent = (matricObt * 100)/matricTotal
        let interPercent = (interObt * 100)/interTotal

        let matricMerit = (matricPercent/100) * 1100
        let interMerit = (interPercent/100) * 1100

        let meritpercent = (matricPercent * 0.40)+(interPercent * 0.60)

        let merit = (meritpercent/100)*1100
        
        resultDiv.innerHTML=
        `Your merit score is here : <br>
          <h1 class="result">${merit}</h1>
        `
}
