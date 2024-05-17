const texto = document.querySelector("#texto")
const button = document.querySelector("#transcrever")

button.addEventListener("click", () => {
    const linhas = (texto.value).split("\n")
    let final = ''

    for (v of linhas) {
        const sp = v.split(':')
        if (sp.length == 1) {
            final = final + v + '\n'
        } else {
            if (!(Number(sp[0]) && Number(sp[1]))) {
                final = final + v + '\n'
            } else {
                final = final + `\n`
            }
        }
    }
    
    texto.value = final
})