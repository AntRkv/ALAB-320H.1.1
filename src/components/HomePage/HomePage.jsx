import EmployeeList from "../EmployeeList/EmployeeList";
import Header from "../Header/Header"
import SearchBar from "../SearchBar/SearchBar";


function HomePage(){

     return (
       <div>
         <Header />
         <SearchBar/>
         <EmployeeList/>
       </div>
     );
}

export default HomePage;