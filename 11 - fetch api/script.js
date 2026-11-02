
const button = document.querySelector("#button");
const factpara= document.querySelector("#fact");

async function getFacts() {


    try {
        console.log("Getting data...");
        factpara.textContent="loading cat fact......"

        const response = await fetch(
            "https://catfact.ninja/fact"
        );

        // HTTP response successful hai ya nahi?
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Cat Facts:", data);
        factpara.textContent= data.fact;

    } catch (error) {
        console.log("Error  :", error.message);
    }
}

button.addEventListener("click" , getFacts);


 