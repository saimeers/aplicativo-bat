document.addEventListener('DOMContentLoaded', function() {
    const commandSelect = document.getElementById('command');
    const parametersInput = document.getElementById('parameters');
    const generateBtn = document.getElementById('generateBtn');
    const scriptOutput = document.getElementById('scriptOutput');
    const downloadBtn = document.getElementById('downloadBtn');

    generateBtn.addEventListener('click', function() {
        const command = commandSelect.value;
        const parameters = parametersInput.value.trim();
        
        // Lógica para generar el script BAT
        let script = `@echo off\n`;
        script += `${command} ${parameters}\n`;
        script += `pause`;

        // Mostrar script generado con animación
        animateScriptOutput(script);
    });

    function animateScriptOutput(script) {
        const lines = script.split('\n');
        let currentLine = 0;
        scriptOutput.textContent = '';

        function showNextLine() {
            if (currentLine < lines.length) {
                scriptOutput.textContent += lines[currentLine] + '\n';
                scriptOutput.scrollTop = scriptOutput.scrollHeight; // Scroll al final
                currentLine++;
                setTimeout(showNextLine, 300); // Retraso para animación (300ms)
            } else {
                downloadBtn.disabled = false; // Habilitar botón de descarga al finalizar
            }
        }

        showNextLine();
    }

    downloadBtn.addEventListener('click', function() {
        const scriptContent = scriptOutput.textContent;
        const blob = new Blob([scriptContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'script.bat';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
