import "./styles.css";
let first = [
  "Keturah",
  "Matthew",
  "Judy",
  "Omari",
  "Melody",
  "Aldo",
  "Reginea",
  "Amori",
  "Laurent",
  "Ye",
  "Sami",
  "Maxwell",
  "Groana",
  "Aland",
  "Jean",
  "Lorena"
];

let last = [
  "Allen",
  "Schupack",
  "Truong",
  "Prass",
  "Suero",
  "Terrana",
  "Walker",
  "Steele",
  "Benjam",
  "Paing",
  "Lieberman",
  "Williams",
  "Melendez",
  "Kuang",
  "Saldarriaga",
  "Castillo"
];

let location = [""];

function addName(firstName) {
  return (
    <tr>
      <td>{firstName}</td>
    </tr>
  );
}

let name = first.map(addName);

export default function App() {
  return (
    <div className="App">
      <table>
        <th>First Name</th>
        {first.map(addName)}
        <th>Last Name</th>
        <th>Location</th>
        <th>Role</th>
      </table>
    </div>
  );
}
