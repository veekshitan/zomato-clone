import React from "react";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import Footer from "../../components/common/footer";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/diningOut";
import NightLife from "../../components/nightLife";

const HomePage = () => {

    const [activeTab, setTab] = React.useState("Delivery")
    return (
        <div>
            <Header />
            <TabOptions activeTab = {activeTab} setTab = {setTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    );
}

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Delivery":
            return <div><Delivery /></div>
        case "Dining Out":
            return <div><DiningOut /></div>
        case "Nightlife":
            return <div><NightLife /></div>
        default:
            return <div>My page my wish</div>
    }
}
export default HomePage;