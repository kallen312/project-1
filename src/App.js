import "./styles.css";

let people = [
  { first: "First Name", last: "Last Name", location: "Location" },
  { first: "Keturah", last: "Allen", location: "Brooklyn" },
  { first: "Matt", last: "Schupack", location: "Brooklyn" },
  { first: "Judy", last: "Truong", location: "Brooklyn" },
  { first: "Omari", last: "Prass", location: "Brooklyn" },
  { first: "Melody", last: "Suero", location: "Brooklyn" },
  { first: "Aldo", last: "Terrana", location: "New Jeresy" },
  { first: "Reginea", last: "Walker", location: "Queens" },
  { first: "Amori", last: "Steele", location: "Brooklyn" },
  { first: "Laurent", last: "Benjamin", location: "Brooklyn" },
  { first: "Ye", last: "Paing", location: "Queens" },
  { first: "Sami", last: "Lieberman", location: "Manhattan" },
  { first: "Maxwell", last: "Williams", location: "New Jersey" },
  { first: "Groana", last: "Melendez", location: "Bronx" },
  { first: "Aland", last: "Kuang", location: "Phoniex" },
  { first: "Jean", last: "Saldarriaga", location: "Manhattan" },
  { first: "Lorena", last: "Castillo", location: "Manhattan" }
];

function addName(person) {
  return (
    <tr>
      <td style={{ backgroundColor: "lightblue" }}>{person.first}</td>
      <td style={{ backgroundColor: "lightpink" }}>{person.last}</td>
      <td style={{ backgroundColor: "lightblue" }}>{person.location}</td>
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
