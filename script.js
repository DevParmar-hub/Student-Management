let Students = [];
let flag = "add";
let foundId;
let currentIndex = 0;
const PAGE_SIZE = 9;
let page = 0;

async function getNews() {
    const preData = await fetch("https://studentapi-m7a7.onrender.com/student/all");
    const Data = await preData.json();
    console.log(Data);
    Students = Data.students;
    page = 0;
    let total = Students.length;
    // let a = Math.floor(total / 10);
    // let b = (total % 10);
    // let j = 0;
    createCard();
}
getNews();



function createCard() {
    let contain = document.querySelector(".container");

    document.querySelectorAll(".card").forEach(el => el.remove());
    document.querySelectorAll(".nextCont").forEach(el => el.remove());

    let start = page * PAGE_SIZE;
    let end = Math.min(start + PAGE_SIZE, Students.length);

    for (let i = start; i < end; i++) {
        let student = Students[i];

        let divCreator = document.createElement("div");
        divCreator.className = "card";
        contain.appendChild(divCreator);

        let name = document.createElement("div");
        name.className = "name";
        divCreator.appendChild(name);

        let user = document.createElement("img");
        user.src = "https://cdn-icons-png.flaticon.com/512/9187/9187604.png";
        user.style.width = "50px";
        name.appendChild(user);

        let newSpan = document.createElement("span");
        newSpan.textContent = student.studentName;
        name.appendChild(newSpan);

        let info = document.createElement("div");
        info.className = "info";
        info.innerHTML = `
            <span class="left">College-${student.college}</span>
            <span class="right">${student.year}</span>
            <span class="left"><br>SapId-${student.sapid}</span>
            <span class="right"><br>CGPA-${student.cgpa}</span>
            <span class="left"><br><br>Phone-${student.phone}</span>
            <span class="right"><br><br>Batch-${student.batch}</span>
            <span class="left"><br><br><br>Address-${student.address}</span>
        `;
        divCreator.appendChild(info);

        let buttons = document.createElement("div");
        buttons.className = "buttons";

        let b1 = document.createElement("button");
        b1.className = "b1";
        b1.dataset.hiddenId = student._id;
        b1.innerText = "Update";

        let b2 = document.createElement("button");
        b2.className = "b2";
        b2.dataset.hiddenId = student._id;
        b2.innerText = "Delete";

        buttons.appendChild(b1);
        buttons.appendChild(b2);
        divCreator.appendChild(buttons);
    }

    let nextCont = document.createElement("div");
    nextCont.className = "nextCont";


    if (page > 0) {
        let back = document.createElement("button");
        back.className = "Next";
        back.innerText = "Back";
        back.onclick = () => {
            page--;
            createCard();
        };
        nextCont.appendChild(back);
    }

    if (end < Students.length) {
        let next = document.createElement("button");
        next.className = "Next";
        next.innerText = "Next";
        next.onclick = () => {
            page++;
            createCard();
        };
        nextCont.appendChild(next);
    }

    contain.appendChild(nextCont);
}



const Darkener = document.querySelector(".Darkener");
const addNew = document.querySelector(".addNew");
const add = document.querySelector(".add");



add.addEventListener("click", loadScreen)
function loadScreen() {
    addNew.style.visibility = "visible";
    Darkener.style.visibility = "visible";
}
const confirm = document.querySelector(".Confirm")
confirm.addEventListener("click", () => {
    if (flag == "add")
        addNewStudent();
    else
        updateStudent();
}




)
async function addNewStudent() {


    let newStudent = {
        studentName: document.getElementById("StuName").value,
        college: document.getElementById("StuCollege").value,
        sapid: document.getElementById("StuId").value,
        year: document.getElementById("StuYear").value,
        cgpa: document.getElementById("StuCg").value,
        phone: document.getElementById("StuPhone").value,
        batch: document.getElementById("StuBatch").value,
        address: document.getElementById("StuAddress").value,
    };


    const post = await fetch("https://studentapi-m7a7.onrender.com/student/add", {
        method: `POST`,
        body: JSON.stringify(newStudent),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    });
    const Data2 = await post.json();
    console.log(Data2);
    const DelCard = document.querySelectorAll(".card");
    DelCard.forEach(el => {
        el.remove();
    });
    getNews();
    addNew.style.visibility = "hidden";
    Darkener.style.visibility = "hidden";
    clearInputs();
}
document.querySelector(".container").addEventListener("click", function (e) {
    console.log("clicked");
    console.log(e);

    console.log(e.target.dataset.hiddenId);
    if (e.target.className === "b1") {
        flag = "update"
        setUpdate(e.target.dataset.hiddenId);

    }
    else if (e.target.className === "b2") {


        deleteStudent(e.target.dataset.hiddenId);
    }
})

function setUpdate(hiddenId) {
    addNew.style.visibility = "visible";
    Darkener.style.visibility = "visible";
    const found = Students.find(el => el._id == hiddenId);
    console.log(found);
    foundId = found._id;
    document.getElementById("StuName").value = found.studentName;
    document.getElementById("StuCollege").value = found.college;
    document.getElementById("StuId").value = found.sapid;
    document.getElementById("StuYear").value = found.year;
    document.getElementById("StuCg").value = found.cgpa;
    document.getElementById("StuPhone").value = found.phone;
    document.getElementById("StuBatch").value = found.batch;
    document.getElementById("StuAddress").value = found.address;
}

async function updateStudent() {

    let newStudent = {
        studentName: document.getElementById("StuName").value,
        college: document.getElementById("StuCollege").value,
        sapid: document.getElementById("StuId").value,
        year: document.getElementById("StuYear").value,
        cgpa: document.getElementById("StuCg").value,
        phone: document.getElementById("StuPhone").value,
        batch: document.getElementById("StuBatch").value,
        address: document.getElementById("StuAddress").value,
    };
    const put = await fetch(`https://studentapi-m7a7.onrender.com/student/update/${foundId}`, {
        method: `PUT`,
        body: JSON.stringify(newStudent),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    });
    const Data2 = await put.json();
    console.log(Data2);
    const DelCard = document.querySelectorAll(".card");
    DelCard.forEach(el => {
        el.remove();
    });
    getNews();
    addNew.style.visibility = "hidden";
    Darkener.style.visibility = "hidden";
    flag = "add";
    clearInputs();
}
function clearInputs() {
    document.querySelectorAll("input").forEach(el => {
        el.value = ""
    })
}
async function deleteStudent(hiddenId) {
    console.log("hi");

    const found = Students.find(el => el._id == hiddenId);
    console.log(found);
    foundId = found._id;
    await fetch(`https://studentapi-m7a7.onrender.com/student/delete/${foundId}`, {
        method: `DELETE`,
    });
    const DelCard = document.querySelectorAll(".card");
    DelCard.forEach(el => {
        el.remove();
    });
    getNews();
}

