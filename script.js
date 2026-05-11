// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    console.log("Script carregado com sucesso! 🚀");

    // 1. Menu Responsivo (Opcional - caso queira adicionar um botão de menu futuramente)
    const links = document.querySelectorAll('nav a');
    
    // 2. Scroll Suave para links internos
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Verifica se o link é para uma âncora interna (ex: #contato)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset por causa do header fixo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Exemplo de Manipulação de Botão (Interatividade)
    const btnPrincipal = document.querySelector('.btn');
    if (btnPrincipal) {
        btnPrincipal.addEventListener('click', () => {
            alert('Você clicou no botão de ação!');
        });
    }

    // 4. Log para facilitar o Debug
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            console.log("Modo Mobile Ativado");
        }
    });
});

/* DICA: Se quiser adicionar um alternador de tema (Dark Mode), 
   você pode usar a lógica abaixo:
*/
function toggleDarkMode() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'rgb(51, 51, 51)' ? '#f4f4f9' : '#333';
    document.body.style.color = 
        document.body.style.color === 'rgb(244, 244, 249)' ? '#333' : '#f4f4f9';
}