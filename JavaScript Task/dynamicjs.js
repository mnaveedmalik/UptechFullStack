// let a = document.createElement("div");
// document.body.appendChild(a);
// a.setAttribute("class", "container");

// let heading = document.createElement("h1")
// heading.innerText = "im heading"
// a.appendChild(heading);




// let heading1 = document.createElement("h2");
// heading1.innerText = "Hello i am naveed";
// document.body.appendChild(heading1);


// let heading2 = document.createElement("p");
// heading2.innerText = "this is a paragraph ";
// document.body.appendChild(heading2);


// let btn = document.createElement("button");
// btn.innerText = "add";
// document.body.appendChild(btn);

// function addMe() {
//     alert("Hello");
// };

// btn.addEventListener("click", addMe)


let heading3 = document.createElement("h1");
heading3.innerText = "haseeb";
document.body.appendChild(heading3);

let para = document.createElement("p");
para.innerText = "Naveed para";
document.body.appendChild(para);

//Container
// function of button
function show() {

    let con = document.createElement("div");
    document.body.appendChild(con);
    con.setAttribute("class", "container");
    con.style.backgroundColor = "red";
    con.style.border = "2px solid black";

    let heading4 = document.createElement("h5");
    heading4.innerText = "This heading is inside the conatiner ";
    con.appendChild(heading4);


}




let con = document.createElement("div");
document.body.appendChild(con);
con.setAttribute("class", "container");
con.style.backgroundColor = "red";
con.style.border = "2px solid black";

let heading4 = document.createElement("h5");
heading4.innerText = "This heading is inside the conatiner ";
con.appendChild(heading4);

let btn1 = document.createElement("button");
btn1.innerText = "Button1";
con.appendChild(btn1);
let btn2 = document.createElement("button");
btn1.addEventListener("click", show);
btn2.innerText = "Button2";
con.appendChild(btn2);




