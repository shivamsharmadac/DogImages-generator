// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
import "./Dogs.css";
export default function Dogs() {
  const DogsNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://source.unsplash.com/random/${DogsNum}1920x1080/?Dogs`;
  return (
    <div className="Dogs">
      <h1>Dog #{DogsNum}</h1>
      <img src={url} alt="" />
    </div>
  );
}
