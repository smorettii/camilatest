const texto = document.querySelector("#texto")
const button = document.querySelector("#transcrever")

button.addEventListener("click", async () => {
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
                final = final.substring(0, final.length-1)
                final = final + ' '
            }
        }
    }

    
    
    texto.value = final

    await new Promise(result => setTimeout(result, 100))

    for (var i=0; i<=100; i++) {
        final = final.replace('\n*trocar*', ' ')
    }

    texto.value = final
})
