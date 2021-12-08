import "./styles.css";

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
  { first: "Judy", last: "Truong", location: "Brooklyn" },
  { first: "Omari", last: "Prass", location: "" },
  { first: "Melody", last: "Suero" },
  { first: "Aldo", last: "Terrana" },
  { first: "Reginea", last: "Walker" },
  { first: "Amori", last: "Steele" },
  { first: "Laurent", last: "Benjamin" },
  { first: "Ye", last: "Paing" },
  { first: "Sami", last: "Lieberman" },
  { first: "Maxwell", last: "Williams" },
  { first: "Groana", last: "Melendez" },
  { first: "Aland", last: "Kuang" },
  { first: "Jean", last: "Saldarriaga" },
  { first: "Lorena", last: "Castillo" }
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
