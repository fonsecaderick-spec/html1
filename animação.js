// ==========================================
// 1. CÓDIGO DA TELA INICIAL (INDEX.HTML)
// ==========================================
let titulo = document.getElementById("titulo");
if (titulo) {
    titulo.innerHTML = "Agro Forte 🌱";
}
function entrar() {
    let nomeInput = document.getElementById("nome");
    if (nomeInput) {
        let nome = nomeInput.value;
        if (nome.trim() === "") {
            alert("Por favor, digite seu nome para continuar!");
            return;
        }
        localStorage.setItem("nomeUsuario", nome);
        
        let mensagemDiv = document.getElementById("mensagem");
        if (mensagemDiv) {
            mensagemDiv.innerHTML = "Olá, " + nome + "! Redirecionando... 🌱";
        }
        window.location.href = "cadastro.html";
    }
}

// ==========================================
// CÓDIGO COMPARTILHADO (CADASTRO E CONCLUSÃO)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA EXCLUSIVA DA TELA DE CADASTRO ---
    let nomeSalvo = localStorage.getItem("nomeUsuario");
    let tituloPagina = document.getElementById("boas-vindas-nome");
    if (nomeSalvo && tituloPagina) {
        tituloPagina.innerHTML = `Olá, ${nomeSalvo}! Seja um Parceiro 🌱`;
    }

    const formulario = document.getElementById("formCadastro");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede a página de recarregar

            let nomeFazenda = document.getElementById("cadastro_fazenda").value;
            let local = document.getElementById("cadastro_localizacao").value;
            let produtos = document.getElementById("cadastro_produtos").value;
            let contato = document.getElementById("cadastro_contato").value;
            let email = document.getElementById("cadastro_email").value;
            let campoFoto = document.getElementById("foto-produto");
            let arquivoFoto = campoFoto.files[0];

            if (arquivoFoto) {
                // Salvando os dados de texto no navegador
                localStorage.setItem("cadastro_fazenda", nomeFazenda);
                localStorage.setItem("cadastro_local", local);
                localStorage.setItem("cadastro_produtos", produtos);
                localStorage.setItem("cadastro_contato", contato);
                localStorage.setItem("cadastro_email", email);
                localStorage.setItem("foto-produto", foto);
                // Convertendo a imagem em texto (Base64) para conseguir passar para a outra página
                let leitor = new FileReader();
                leitor.onload = function(e) {
                    localStorage.setItem("cadastro_foto", e.target.result);
                    // Só muda de página após terminar de salvar a foto
                    window.location.href = "conclusao.html";
                }
                leitor.readAsDataURL(arquivoFoto);
            }
        });
    }

    // --- LÓGICA EXCLUSIVA DA TELA DE CONCLUSÃO ---
     document.getElementById("formCadastro").addEventListener("submit", function(event){
        let leitor = new FileReader();
        leitor.onload = function(e){
        localStorage.setItem("cadastro_foto", e.target.result);
        window.location.href = "conclusao.html";
        };

leitor.readAsDataURL(arquivoFoto);

    event.preventDefault();

    window.location.href = "conclusao.html";

});
    let resumoFazenda = document.getElementById("resumo-fazenda");
    // Se esse elemento existir, significa que o usuário acabou de entrar na tela de conclusão
    if (resumoFazenda) {
        document.getElementById("resumo-fazenda").textContent =
localStorage.getItem("resumo_fazenda");

        document.getElementById("resumo-local").textContent =
localStorage.getItem("resumo_local");

        document.getElementById("resumo-produto").textContent =
localStorage.getItem("resumo_produtos");

        document.getElementById("resumo-contato").textContent =
localStorage.getItem("resumo_contato");

        document.getElementById("resumo-email").textContent =
localStorage.getItem("resumo_email");
        
    let fotoSalva = localStorage.getItem("cadastro_foto");
    let tagImg = document.getElementById("resumo-foto");

    if(fotoSalva && tagImg){
        tagImg.src = fotoSalva;
        tagImg.style.display = "block";
        }
    }
});
// --- PARTE DA LOJA ---
// Lógica para adicionar o item (substitua o alert pelo seu sistema de carrinho se tiver um)
function adicionarItem(nomeProduto) {
    alert(`${nomeProduto} foi adicionado com sucesso!`);
}

// Função utilitária para caso queira rolar a página até a loja usando um botão externo
function rolarAteALoja() {
    const vitrine = document.getElementById('vitrine-produtos');
    if (vitrine) {
        vitrine.scrollIntoView({ behavior: 'smooth' });
    }
}