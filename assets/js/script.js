document.addEventListener("DOMContentLoaded", function () {

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // ===== Nome =====
        const campoNome = document.querySelector("#name");
        const errNome = document.querySelector("#error-name");

        if (campoNome.value.trim().length < 3) {
            errNome.textContent = "O nome deve ter no mínimo 3 caracteres.";
            campoNome.focus();
            return;
        } else {
            errNome.textContent = "";
        }

        // ===== Email =====
        const campoEmail = document.querySelector("#email");
        const errEmail = document.querySelector("#error-email");

        if (!emailRegex.test(campoEmail.value)) {
            errEmail.textContent = "Digite um e-mail válido.";
            campoEmail.focus();
            return;
        } else {
            errEmail.textContent = "";
        }

        // ===== Assunto =====
        const campoSubject = document.querySelector("#subject");
        const errSubject = document.querySelector("#error-subject");

        if (campoSubject.value.trim().length < 5) {
            errSubject.textContent = "O assunto deve ter no mínimo 5 caracteres.";
            campoSubject.focus();
            return;
        } else {
            errSubject.textContent = "";
        }

        // ===== Mensagem =====
        const campoMessage = document.querySelector("#message");
        const errMessage = document.querySelector("#error-message");

        if (campoMessage.value.trim().length < 10) {
            errMessage.textContent = "A mensagem deve ter no mínimo 10 caracteres.";
            campoMessage.focus();
            return;
        } else {
            errMessage.textContent = "";
        }

        // ✅ Sucesso
        alert("Formulário enviado com sucesso! 💙");

        formulario.reset();
    });

});
