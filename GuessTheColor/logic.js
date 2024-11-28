let array = [];
let answer;
let clicked = (self) => {
    let button = self.style.backgroundColor;
    if (button === answer) {
        alert("정답입니다.")
    } else {
        alert("실패.")
    }
}

let display = (list) => {
    document.querySelector('.RGB').innerHTML = `RGB${answer.slice(3,answer.length)}`;
}

let reset = () => {
    array = [];
    answer = "";
}

let changeColor = (self) => {
    reset();
    let button = document.querySelectorAll('.buttonColor')
    let diff = document.querySelectorAll('.difficulty button')

    for(let i = 0; i<button.length; i++) {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        button[i].style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        array.push(`rgb(${R}, ${G}, ${B})`);
    }
    answer = array[Math.floor(Math.random() * 6)];
    display(array);

    if(self.value === "EASY") {
        diff[1].style.backgroundColor = "white";
        diff[1].style.color = "#029895";
        self.style.backgroundColor = "#029895";
        self.style.color = "white";
    } else if(self.value === "HARD"){
        diff[0].style.backgroundColor = "white";
        diff[0].style.color = "#029895";
        self.style.backgroundColor = "#029895";
        self.style.color = "white";
    }

}

