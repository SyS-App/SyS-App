// AppLayout
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";



const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {


    return (
        <>
            <NavBar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </>
    )
}



export default AppLayout;