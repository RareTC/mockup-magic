import './SavedPalette.css';

export default function SavedPalette({ myPalettes }) {
  console.log(myPalettes)
  return (
    <div className="saved-palette">
      {myPalettes.map((palette, idx) => (
        <div key={idx} className="palette-item" style={{ backgroundColor: `${palette}` }}></div>
      ))}
    </div>
  );
}