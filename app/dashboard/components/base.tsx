// Dashboard page component (All)
import DashboardNavBar from "./navbar";
import DashboardCore from "./core";

const BaseDashboardComponent = () => {
    return (
        <div className="">
            {/* Navbar */}
            <DashboardNavBar /> 
            {/* Dashboard Core */}
            <DashboardCore />
        </div>
    )
}


export { BaseDashboardComponent };