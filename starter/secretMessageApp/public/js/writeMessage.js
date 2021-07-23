const messagesRef = firebase.database().ref();
const inputPass = document.querySelector("#passcode");
const inputText = document.querySelector("#message");

const submitMessage = (userName, userGenre) => {
    messagesRef.push({
        name: userName,
        genre: userGenre
    });
}

document.querySelector("#sendMsg").addEventListener("click", (e)=>{
    let genre = document.querySelector("#passcode").value;
    let name = document.querySelector("#message").value;

    //console.log(message + " " + passcode);

    submitMessage(name, genre);
});

/*
messagesRef.push({
    message: "This was made with JS",
    passcode:"JS"
});
*/
