alert("Ok")
const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const permitida = Number(form.inPerm.value)
    const condutor = Number(form.inCond.value)
    let leve = permitida + (permitida * 0.2)
    alert(permitida + condutor + leve)
    
    if(condutor <= permitida) {
        resp.innerText = `Situação Sem Multa`

    } else if(condutor <= leve) {
        resp.innerText = `Situação Multa Leve`

    } else {
        resp.innerText = `Situação Multa Grave`

    }
})