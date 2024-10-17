function convertToBinary() {
    // Récupérer la valeur d'entrée et la convertir en nombre
    const decimalInput = document.getElementById('decimalInput').value;
    const decimal = parseInt(decimalInput, 10);

    // Vérifier si l'entrée est valide
    if (isNaN(decimalInput) || decimalInput < 0) {
        return;
    }

    // Convertir en binaire
    let binary = decimal.toString(2);

    // Afficher le résultat
    document.getElementById('binaryResult').textContent = `Le nombre binaire est : ${binary}`;
}
