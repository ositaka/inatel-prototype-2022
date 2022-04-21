const $ = (el) => document.querySelector(el);
const $all = (el) => document.querySelectorAll(el);

const links = $all('a')

const menuDestinos = $('#menu__destinos');
const menuTemas = $('#menu__temas');
const menuTipoViagem = $('#menu__tipo-de-viagem');

const tabDestinos = $('#tab__destinos');
const tabTemas = $('#tab__temas');
const tabTipoViagem = $('#tab__tipo-de-viagem');
const tabBg = $('.menu__navigation__tab__bg');

/**
 * Menu/Tab — Destinos
 */
menuDestinos.addEventListener('mouseenter', () => { tabDestinosActive(); });
menuDestinos.addEventListener('mouseleave', () => { tabDestinosInactive(); });
tabDestinos.addEventListener('mouseenter', () => { tabDestinosActive(); });
tabDestinos.addEventListener('mouseleave', () => { tabDestinosInactive(); });

function tabDestinosActive() {
  tabDestinos.classList.remove('active');
  tabDestinos.classList.add('active');
  tabBg.style.opacity = '1';
}
function tabDestinosInactive() {
  tabDestinos.classList.remove('active');
  tabBg.style.opacity = '0';
}

/**
 * Menu/Tab — Temas
 */
menuTemas.addEventListener('mouseenter', () => { tabTemasActive(); });
menuTemas.addEventListener('mouseleave', () => { tabTemasInactive(); });
tabTemas.addEventListener('mouseenter', () => { tabTemasActive(); });
tabTemas.addEventListener('mouseleave', () => { tabTemasInactive(); });

function tabTemasActive() {
  tabTemas.classList.remove('active');
  tabTemas.classList.add('active');
  tabBg.style.opacity = '1';
}
function tabTemasInactive() {
  tabTemas.classList.remove('active');
  tabBg.style.opacity = '0';
}

/**
 * Menu/Tab — TipoViagem
 */
menuTipoViagem.addEventListener('mouseenter', () => { tabTipoViagemActive(); });
menuTipoViagem.addEventListener('mouseleave', () => { tabTipoViagemInactive(); });
tabTipoViagem.addEventListener('mouseenter', () => { tabTipoViagemActive(); });
tabTipoViagem.addEventListener('mouseleave', () => { tabTipoViagemInactive(); });

function tabTipoViagemActive() {
  tabTipoViagem.classList.remove('active');
  tabTipoViagem.classList.add('active');
  tabBg.style.opacity = '1';
}
function tabTipoViagemInactive() {
  tabTipoViagem.classList.remove('active');
  tabBg.style.opacity = '0';
}


/********************************************************************************* */
/**
 * Pesquisa — Origem
 */

if ($('.pesquisa')) {
  const pesquisaOrigem = $('#nav__origem');
  const pesquisaDestino = $('#nav__destino');
  const pesquisaMes = $('#nav__mes');
  const pesquisaOrcamento = $('#nav__orcamento');

  const selectaOrigem = $('#origem');
  const selectaDestino = $('#destino');
  const selectaMes = $('#mes');
  const selectaOrcamento = $('#orcamento');

  // EventListeners
  // Origem
  pesquisaOrigem.addEventListener('mouseenter', () => { selectaOrigemActive(); });
  pesquisaOrigem.addEventListener('mouseleave', () => { selectaOrigemInactive(); });

  function selectaOrigemActive() {
    selectaOrigem.classList.remove('active');
    selectaOrigem.classList.add('active');
  }
  function selectaOrigemInactive() {
    selectaOrigem.classList.remove('active');
  }

  // Destino
  pesquisaDestino.addEventListener('mouseenter', () => { selectaDestinoActive(); });
  pesquisaDestino.addEventListener('mouseleave', () => { selectaDestinoInactive(); });

  function selectaDestinoActive() {
    selectaDestino.classList.remove('active');
    selectaDestino.classList.add('active');
  }
  function selectaDestinoInactive() {
    selectaDestino.classList.remove('active');
  }

  // Mes
  pesquisaMes.addEventListener('mouseenter', () => { selectaMesActive(); });
  pesquisaMes.addEventListener('mouseleave', () => { selectaMesInactive(); });

  function selectaMesActive() {
    selectaMes.classList.remove('active');
    selectaMes.classList.add('active');
  }
  function selectaMesInactive() {
    selectaMes.classList.remove('active');
  }

  // Orcamento
  pesquisaOrcamento.addEventListener('mouseenter', () => { selectaOrcamentoActive(); });
  pesquisaOrcamento.addEventListener('mouseleave', () => { selectaOrcamentoInactive(); });

  function selectaOrcamentoActive() {
    selectaOrcamento.classList.remove('active');
    selectaOrcamento.classList.add('active');
  }
  function selectaOrcamentoInactive() {
    selectaOrcamento.classList.remove('active');
  }
}

/********************************************************************************* */
/**
 * Show links when "a" key is pressed
 */

// show alert
if (!sessionStorage.getItem('alert')) {
  setTimeout(() => { document.documentElement.style.opacity = "0.3" }, 200);
  setTimeout(() => {
    window.alert('Pressione a tacla "A" no seu teclado para ver todos os links clicáveis ou com interações');
    document.documentElement.style.opacity = "1"
  }, 600);
}

sessionStorage.setItem('alert', 'yes')


document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    links.forEach(link => {
      link.style.background = "rgba(255, 0, 125, 0.5)";
      link.style.border = "3px solid rgba(255, 0, 125, 1)";
    })
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'a') {
    links.forEach(link => {
      link.style.background = "none";
      link.style.border = "0";
    })
  }
});