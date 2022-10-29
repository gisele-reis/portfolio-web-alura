const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile



const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-puzzle': 'Adoro puzzles! Aprendi a montar o cubo mágico aos 12 anos e também sei resolver algumas variações do clássico 3x3x3.',
    'interesse-serie': "Gosto muito de sitcoms, acho que posso citar That '70s Show como uma das minhas favoritas.",
    'interesse-pokemon': 'Amo Pokémon! Principalmente os do tipo água, inclusive tenho um carinho especial pelo Mudkip e Squirtle.',
    'interesse-natureza': 'Sempre me importei muito com animais e o meio ambiente, por isso acabei me tornando vegetariana.'
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}
