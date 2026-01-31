import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"


const DashboardLayout = ({children}:{children:React.ReactNode})=>{
    return(
        <section className="flex gap-4 bg-[#F7F8FA]">
            {/* left */}
            <div className="flex-[0.1] bg-whitse p-4">
                <Link href={'/'} className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src={'/logo.png'} alt="logo" width={32} height={332} />
                    <span className="hidden lg:block font-bold">Schoolama</span>
                </Link>
                <Menu />
            </div>
            {/* right */}
            <div className="flex-[0.9] mb-4  ">
                <Navbar />
                {children}
             </div>

        </section>
    )
}


export default DashboardLayout