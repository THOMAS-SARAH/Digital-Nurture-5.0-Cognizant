import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Sarah Thomas"
        School="St. Joseph's Sr. Sec. School"
        Total={450}
        Goal={5}
      />
    </div>
  );
}

export default App;