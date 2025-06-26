window.onload = function() {
    const socket = io();

    const messages = document.getElementById('messages');
    const input = document.getElementById('input');
    const sendBtn = document.getElementById('send');

    sendBtn.onclick = function() {
        const msg = input.value.trim();
        if (msg) {
            socket.emit('send_message', { message: msg });
            input.value = '';
        }
    };

    socket.on('receive_message', function(data) {
        const div = document.createElement('div');
        div.textContent = data.message;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    });

    input.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });
}; 