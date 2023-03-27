import './SavedPalette.css';

export default function SavedPalette({ colors }) {
  return (
    <div className="saved-palette">
      {colors.map((color, idx) => (
        <div key={idx} className="palette-item" style={{ backgroundColor: `rgb(${color})` }}></div>
      ))}
    </div>
  );
}