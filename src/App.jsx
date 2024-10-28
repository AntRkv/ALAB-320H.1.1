import HomePage from "./components/homePage/homePage";
import EmployeePage from "./components/employeePage/employeePage";

function App() {
  const appContainerStyle = {
    display: "flex",
  
    gap: "20px",
    padding: "20px",
  };

  const pageStyle = {
    border: "1px solid #ddd",
    padding: "15px",
    flex: 1,
  };

  return (
    <main style={appContainerStyle}>
      <div style={pageStyle}>
        <HomePage />
      </div>
      <div style={pageStyle}>
        <EmployeePage />
      </div>
    </main>
  );
}

export default App;
