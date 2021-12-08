import "./styles.css";

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

let location = [
  "Brooklyn",
  "Brooklyn",
  "Brookyln",
  "Brooklyn",
  "Brooklyn",
  "New Jeresy",
  "Queens"
];

let people = [
  { first: "First Name", last: "Last Name", location: "Location" },
  { first: "Keturah", last: "Allen", location: "Brooklyn" },
  { first: "Matt", last: "Schupack", location: "Brooklyn" },
  { first: "Judy", last: "Truong" },
  { first: "Omari" },
  { first: "Melody" },
  { first: "Aldo" },
  { first: "Reginea" },
  { first: "Amori" },
  { first: "Laurent" },
  { first: "Ye" },
  { first: "Sami" },
  { first: "Maxwell" },
  { first: "Groana" },
  { first: "Aland" },
  { first: "Jean" },
  { first: "Lorena" }
];

function addName(person) {
  let font = "redFont";

  if (person.first === "Keturah") {
    font = "blueFont";
  }

  return (
    <tr>
      <td className={font}>{person.first}</td>
      <td style={{ backgroundColor: "lightpink" }}>{person.last}</td>
      <td>{person.location}</td>
    </tr>
  );
}

export default function App() {
  return (
    <div className="App">
      <table>{people.map(addName)}</table>
    </div>
  );
}
