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
  "Semi",
  "Maxwell",
  "Groana",
  "Aland",
  "Jean",
  "Lorena"
];

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
        <th></th>
      </table>
    </div>
  );
}
