const int1 = document.querySelector(".box1");
const int2 = document.querySelector(".box2");
const btn = document.querySelector(".box3");
const resultEl = document.querySelector(".result")

int1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        int2.focus();
    }
});

int2.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        btn.focus();
    }
})

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    const massage = int1.value;

    try {
        const res =await fetch("/api/echo", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ massage })
        });
        const data =await res.json();
        resultEl.textContent = `welcome my friend:"${data.received}"`;

        let newp = document.createElement("p");
        newp.innerHTML = `client Name= ${int1.value}`;
        let btn2 = document.createElement("button");
        btn2.innerHTML = "DELETE";
        btn.after(newp);
        newp.after(btn2);

        btn2.addEventListener("click", () => {
            newp.remove();
            btn2.remove();
        })

        int1.value = '';
        int2.value = '';
    } catch (err) {
        console.log("Error:", err);
    }
});