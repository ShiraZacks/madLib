
function adLib() {
    const myName = document.getElementById("name").value;
    const myPlace = document.getElementById("place").value;
    const myAnimal = document.getElementById("animal").value;
    const myVerb = document.getElementById("verb").value;
    const myNumber = document.getElementById("time").value;
    const myFood = document.getElementById("food").value;


    let story = {
        name: myName,
        place: myPlace,
        animal: myAnimal,
        verb: myVerb,
        number: myNumber,
        food: myFood
    }
    if ((myName == "") || (myPlace == "") || (myAnimal == "") || (myVerb == "") || (myNumber == "") || (myFood == ""))
        alert("Please fill everything in!");
    else {
        let newTab = window.open("", "", height = 200, width = 200, left = 300);
        newTab.document.write(`My name is ${story.name}. Yesterday, I went to ${story.place}. `);
        newTab.document.write(`I went with my pet ${story.animal}, to buy her a sweater for the coming winter. `);
        newTab.document.write(`However, when I got to ${story.place}, they told me that ${story.animal}s are not allowed!! `);
        newTab.document.write(`I was horrified, and I told them that with much ${story.verb}ing. `);
        newTab.document.write(`After ${story.verb}ing for ${story.number} minutes, I went back home where my ${story.animal} and I ate ${story.food} together. `);
        newTab.document.write(`Turns out that ${story.animal}s are actually allergic to ${story.food}, and we spent the rest of the day at the veterinarian. `);
        newTab.document.write(`I hope today turns out better. `);
    }
}

