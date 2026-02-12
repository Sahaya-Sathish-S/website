let students = [];

function addStudent() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const dept = document.getElementById("dept").value;

    if (name === "" || age === "" || dept === "") {
        alert("Please fill all fields!");
        return;
    }

    const student = {
        name: name,
        age: age,
        dept: dept
    };

    students.push(student);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dept").value = "";
}

function displayStudents() {

    const table = document.getElementById("studentTable");
    table.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        const row = `
            <tr>
                <td>${students[i].name}</td>
                <td>${students[i].age}</td>
                <td>${students[i].dept}</td>
            </tr>
        `;

        table.innerHTML += row;
    }
}

function clearStudents() {

    students = [];
    displayStudents();
}