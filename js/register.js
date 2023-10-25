       // Fonction de validation générique
       function validateField(inputId, regex, errorMessage) {
        const inputField = document.getElementById(inputId);
        const inputValue = inputField.value.trim();
        const errorSpan = inputField.parentElement.querySelector(".error-message");
        const successSpan = inputField.parentElement.querySelector(".success-message");
    
        if (regex.test(inputValue)) {
            inputField.classList.remove("error");
            inputField.classList.add("success");
            errorSpan.style.display = "none";
            successSpan.style.display = "block";
        } else {
            inputField.classList.remove("success");
            inputField.classList.add("error");
            errorSpan.style.display = "block";
            successSpan.style.display = "none";
            errorSpan.textContent = errorMessage;
        }
    }
// Écouter les événements "input" pour déclencher la validation à chaque saisie
    document.getElementById("full-name").addEventListener("input", () => {
        validateField("full-name", /^[A-Za-z\s]{3,}$/, "Le nom doit comporter au moins 3 caractères.");
    });
    
    document.getElementById("username").addEventListener("input", () => {
        validateField("username", /^.{3,}$/, "Le nom d'utilisateur est incorrect.");
    });
    
    document.getElementById("email").addEventListener("input", () => {
        validateField("email", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "L'adresse e-mail est invalide.");
    });
    
    document.getElementById("cin").addEventListener("input", () => {
        validateField("cin", /^[A-Z]{2}\d{6}$/, "Le CIN est incorrect.");
    });
    
    document.getElementById("phone-number").addEventListener("input", () => {
        validateField("phone-number", /^\+212\d{9}$|^\d{10}$/, "Le numéro de téléphone est invalide.");
    });
    
    document.getElementById("pack-name").addEventListener("input", () => {
        validateField("pack-name", /^.{4,}$/, "Le nom du pack doit comporter au moins 4 caractères.");
    });

    