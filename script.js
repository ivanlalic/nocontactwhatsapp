document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("whatsapp-form");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const phoneNumber = phoneInput.value;
        const message = messageInput.value;
        if (phoneNumber) {
            let whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
            if (message) {
                whatsappURL += `&text=${encodeURIComponent(message)}`;
            }
            window.location.href = whatsappURL;
        }
    });
});
