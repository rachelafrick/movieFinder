document.querySelector("#viewMsg").addEventListener("click", (e)=>{
    const userGenre = document.querySelector("#passcode").value;

    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) =>{
        const data = snapshot.val();
        for(let key in data){
            if(data[key].genre.toUpperCase() === userGenre.toUpperCase()){
                display(data[key]);
            }
        }
    });
});

function display(message){
    //console.log(message);
    const messageText = document.querySelector("#message");
    const formPortion = document.querySelector("#passcodeInput");
    messageText.innerHTML = messageText.innerHTML + "<br>" + message.name;
    formPortion.style.display = "none";
}

/*
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for(let key in data){
            const message = data[key];
            console.log(message);
            
        }
    });
}

const findMessage = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for(let key in data){
            const message = data[key];
            console.log(message);
            if(myPass == message.passcode){
                renderMessage(message);
            }
        }
    });
}

document.querySelector("#viewMsg").addEventListener("click", () => {
    const passcode = document.querySelector("#passcode").value;
    findMessage(passcode);
});
*/