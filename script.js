let currentUser = null;

function joinChat() {
    const username = document.getElementById("username").value;
    const profilePicture = document.getElementById("profile-picture").value;

    if (!username || !profilePicture) {
        alert("이름과 프로필 사진 URL을 입력해주세요.");
        return;
    }

    currentUser = {
        name: username,
        picture: profilePicture
    };

    document.querySelector(".profile").style.display = "none";
    document.getElementById("chat-box").style.display = "block";
    displayMessage("안녕하세요, " + username + "님! 채팅을 시작하세요.", "system");
}

function sendMessage() {
    const message = document.getElementById("message").value;
    if (!message) {
        alert("메시지를 입력하세요.");
        return;
    }

    displayMessage(message, "user");
    document.getElementById("message").value = "";
}

function displayMessage(message, sender) {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (sender === "user") {
        const img = document.createElement("img");
        img.src = currentUser.picture;
        messageDiv.appendChild(img);
    }

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("message-content");
    contentDiv.textContent = message;
    messageDiv.appendChild(contentDiv);

    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // 자동으로 스크롤 다운
}
