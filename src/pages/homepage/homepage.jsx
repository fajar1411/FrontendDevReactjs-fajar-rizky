import DashboardContent from "../../component/Dashboard/content"
import { ItemProvider } from "../../component/context/Contextprovid"
import NavsApp from "../../component/navapp/navapp"



function HomePage() {
    
        
    
  

      return (
        <div >
          <ItemProvider>
            
          <NavsApp />
          <DashboardContent/>
          </ItemProvider>
        </div>
        
      )
    
    }
    
  export default HomePage