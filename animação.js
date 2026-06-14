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
        event.preventDefault();

        let nomeFazenda = document.getElementById("nome-fazenda").value;
        let local = document.getElementById("localizacao").value;
        let produtos = document.getElementById("produtos").value;
        let contato = document.getElementById("telefone").value;
        let email = document.getElementById("email").value;

        let arquivoFoto =
        document.getElementById("foto-produto").files[0];

        localStorage.setItem("cadastro_fazenda", nomeFazenda);
        localStorage.setItem("cadastro_local", local);
        localStorage.setItem("cadastro_produtos", produtos);
        localStorage.setItem("cadastro_contato", contato);
        localStorage.setItem("cadastro_email", email);

        // --- Substitua o bloco do "if (arquivoFoto)" por este: ---

if (arquivoFoto) {
    let leitor = new FileReader();

    leitor.onload = function(e) {
        try {
            localStorage.setItem("cadastro_foto", e.target.result);
        } catch (erro) {
            console.warn("A foto é muito grande para o localStorage! O cadastro continuará sem ela.");
            localStorage.removeItem("cadastro_foto"); // Garante que limpa o que falhou 
        }
        window.location.href = "conclusao.html";
        }
      leitor.readAsDataURL(arquivoFoto); // Executa a leitura da imagem
            } else {
window.location.href = "conclusao.html";
}
});
}
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
function validarFormulario(event) {
    // Pega o formulário pelo ID
    const formulario = document.getElementById('formCadastro');
    
    // Verifica se todos os campos 'required' estão preenchidos corretamente
    if (!formulario.checkValidity()) {
        // Se o formulário estiver inválido, impede o link de abrir a página
        event.preventDefault(); 
        
        // Força o navegador a mostrar os alertas visuais de erro nos campos vazios
        formulario.reportValidity();
    }
}
