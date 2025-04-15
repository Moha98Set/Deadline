'use client'

import dynamic from 'next/dynamic';

const ViewMap = dynamic(() => import('../../viewMap/page'), {
  ssr: false,
});

const getDataById = async (id) =>{
    try {
        const res = await fetch(`http://localhost:3000/api/data/${id}`, {cache: 'no-store'})

        if(!res.ok){
            throw new Error('Failed to fetch Data.')
        }
        console.log(res)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

async function ShowMap({ params }){
    const { id } = params
    const { data } = await getDataById(id)    

    return(
        <>            
            <ViewMap data={data.coordinates} />
        </>
    )

}

export default ShowMap