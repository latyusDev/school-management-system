import React from 'react'

export interface Column{
    header:string;
    accessor:string;
    className?:string;
}
interface TableProps<T>{
    column:Column[],
    data:T[],
    row:(item:T)=>React.ReactNode
}

const Table = <T,>({columns,row,data}:TableProps<T>) => {
    console.log(data)
  return (
    <table className='w-full mt-4 text-left text-gray-500 text-sm'>
        <thead>
            <tr className='mb-10'>
                {columns.map(col=>(
                    <th className={col.className} key={col.accessor}>
                        {col.header}
                    </th>
                ))}
            </tr>

        </thead>
        <tbody>
            {
                data.map(item=>row(item))
            }
        </tbody>
    </table>
  )
}

export default Table