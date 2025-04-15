import ViewMap from "@/app/components/testMap"

export default async function({ params }){
    const { id } = await params
    return(
        <>
            <ViewMap id={id} />
        </>
    )
}