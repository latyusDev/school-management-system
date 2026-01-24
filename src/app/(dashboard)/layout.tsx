import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"


const DashboardLayout = ({children}:{children:React.ReactNode})=>{
    return(
        <section className="h-screen flex">
            {/* left */}
            <div className="w-[14%] md:w-[0%] md:lg-[16%] xl:w-[14%]  p-4">
                <Link href={'/'} className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src={'/logo.png'} alt="logo" width={32} height={332} />
                    <span className="hidden lg:block">Schoolama</span>
                </Link>
                <Menu />
            </div>
            {/* right */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl-[86%] bg-[#F7F8FA] overflow-y-scroll">
                <Navbar />
                {children}
             </div>

        </section>
    )
}


export default DashboardLayout