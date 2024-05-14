function checkForm(form)
{
    if(form.prenom.value == "" || form.nom.value == "" || !form.conditions.checked) {
        alert("Veuillez remplir tous les champs requis.");
        return false;
    }
    window.location.href = "./firstPage.html";
}