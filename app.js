let students = [
  {id: 1, name: "Rahul", email: "rahul@gmail.com", course: "CSE", marks: 85},
  {id: 2, name: "Aditi", email: "aditi@gmail.com", course: "ECE", marks: 78}
];

function loadTable() {
  let output = "";
  students.forEach(s => {
    output += `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.email}</td>
        <td>${s.course}</td>
        <td>${s.marks}</td>
      </tr>
    `;
  });

  document.getElementById("data").innerHTML = output;
}

loadTable();

