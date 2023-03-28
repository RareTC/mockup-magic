import './SavedPalette.css';

export default function SavedPalette({ myPalettes }) {
  console.log(myPalettes)
  return (
    <div className="saved-palette">
      {myPalettes.colors.map((color, idx) => (
        <div key={idx} className="palette-item" style={{ backgroundColor: `rgb(${color})` }}></div>
      ))}
    </div>
  );
}