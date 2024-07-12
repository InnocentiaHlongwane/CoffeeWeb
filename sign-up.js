function signUp() {

    let name = prompt("Enter your name and surname")
   alert("Exactly what you looking for!" + " " + name +" " + "a perfect blend of cofee to keep you going until i'ts time to stop.");

   let email = prompt("enter your email adress to get our daily deals");
   alert("Successfully singed in 😊," + " " + "Happiness is a warm cup of coffee☕");
    }

    let signButton = document.querySelector("button");
    signButton.addEventListener("click",signUp);