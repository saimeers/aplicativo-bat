function changeExample() {
    const exampleSelect = document.getElementById('exampleSelect').value;
    const exampleInput = document.getElementById('exampleInput');
    const exampleOutput = document.getElementById('exampleOutput');

    let inputText, outputText;

    switch (exampleSelect) {
        case '1':
            inputText = `@echo off\necho Hola Mundo\npause`;
            outputText = `Hola Mundo\nPresione una tecla para continuar . . .`;
            break;
        case '2':
            inputText = `@echo off\necho Este es el segundo ejemplo\necho.\npause`;
            outputText = `Este es el segundo ejemplo\n\nPresione una tecla para continuar . . .`;
            break;
        case '3':
            inputText = `@echo off\necho Ejemplo 3\necho Linea en blanco\necho.\necho Fin del ejemplo\npause`;
            outputText = `Ejemplo 3\nLinea en blanco\n\nFin del ejemplo\nPresione una tecla para continuar . . .`;
            break;
        default:
            inputText = '';
            outputText = '';
    }

    exampleInput.textContent = inputText;
    exampleOutput.textContent = outputText;
}
