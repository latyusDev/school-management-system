'use client'
import { ITEM_PER_PAGE } from '@/lib/settings'
import { useRouter } from 'next/navigation'

const Pagination = ({page,count}:{page:number,count:number}) => {
    const router = useRouter()
    const hasPrev = ITEM_PER_PAGE * (page-1) < 0
    const hasNext = ITEM_PER_PAGE * (page-1) + ITEM_PER_PAGE < count// on page 3, 3 -1 = 2, 2 * item_per_page(5) + item_per_page(5) < 20

    console.log(count)

    const changePage = (newPage:number)=>{
        const params = new URLSearchParams(window.location.search)
        params.set('page',newPage.toString())
        router.push(`${window.location.pathname}?${params}`)
    }
  return (
    <div className='flex justify-between items-center text-gray-500 mt-7'>
        <button 
        disabled={!hasPrev}
        onClick={()=>changePage(page-1)} 
        className='py-2 px-4 cursor-pointer rounded-md  bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>
            prev
        </button>
        <div className=" flex items-center gap-2 text-sm">
                {
                    Array.from({length:Math.ceil(count/ITEM_PER_PAGE)}).map((_,index)=>{
                        const pageIndex = index + 1;
                        console.log(page,pageIndex)
                        return(
                            <button onClick={()=>changePage(pageIndex)} className={`px-2 rounded-sm cursor-pointer ${page == pageIndex?'bg-lamaSky':''}`}>{pageIndex}</button>
                        )
                    })
                }

        </div>
        <button 
        onClick={()=>changePage(page+1)} 
        disabled={!hasNext}
         className='py-2 px-4 cursor-pointer rounded-md  bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>
            next
        </button>
    </div>
  )
}

export default Pagination