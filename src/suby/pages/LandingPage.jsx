import Chains from "../components/Chains"
import FirmCollections from "../components/FirmCollections"
import ItemsDisplay from "../components/ItemsDisplay"
import TopBar from "../components/TopBar"

const LandingPage = () => {
  return (
    <div>
        <TopBar/>

        <div className="landingSection">
        <ItemsDisplay/>
        <Chains/>
        <FirmCollections/>
        </div>
        
        
    </div>
  )
}

export default LandingPage