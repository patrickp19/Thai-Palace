const cardlist = document.getElementById("card-list");

function getCardList() {
  fetch("https://quiet-ocean-33729.herokuapp.com/getitems")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.forEach((item) => {
        const { id, name, description } = item;
        const newCard = document.createElement("div");
        newCard.className = "card flow-content";
        newCard.innerHTML = `
        <h2>${id}. ${name}</h2>
        <p>${description}</p>
        `;
        cardlist.append(newCard);
      });
    });
  //   fetch("http://localhost:3000/getitems", {
  //     method: "get",
  //     headers: { "Content-Type": "application/json" },
  //   }).then((resp) => resp.json());
  // }
}

getCardList();
