import './SavedPalette.css';

export default function SavedPalette({ color, idx, date }) {
  return (
    <>
    <div className="saved-palette"
    >
            <div className="saved-palette-item"
            key={idx}
            type="color" 
            style={{ backgroundColor: color }}
            >
            </div>

            <select name="
            " id=""
            >

            </select>
      </div>
      </>
  );
}

