document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('autoSaveTextarea');
    const status = document.getElementById('status');

    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        textarea.value = savedText;
        status.textContent = 'Last saved content restored.';
    }

    // Auto-save hoga yha se
    textarea.addEventListener('input', function () {
        const text = textarea.value;
        localStorage.setItem('savedText', text);
        status.textContent = 'Auto-saved!';
        status.style.opacity = 1;

        // message fad out hoga 2 sec ke baad
        setTimeout(() => {
            status.style.opacity = 0.8;
        }, 2000);
    });
});