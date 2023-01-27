(() => {
    const etapas = document.querySelectorAll('[data-etapa]')
    const conteudos = document.querySelectorAll('[data-conteudo]')

    inativarEtapas = () => {
        etapas.forEach(etapa => etapa.classList.remove('ativado'))
    }

    esconderConteudos = () => {
        conteudos.forEach(conteudo => conteudo.classList.add('desativado'))
    }

    ativarEtapa = (etapa) => {
        etapa.classList.add('ativado')
    }

    mostrarConteudo = (atributo) => {
        const conteudo = document.querySelector(`[data-conteudo="${atributo}"]`)
        conteudo.classList.remove('desativado')
    }

    etapas.forEach(etapa => etapa.addEventListener('click', () => {
        const atributo = etapa.dataset.etapa
        inativarEtapas()
        esconderConteudos()
        ativarEtapa(etapa)
        mostrarConteudo(atributo)
    }))
})()
