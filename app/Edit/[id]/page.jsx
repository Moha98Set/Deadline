import EditForm from "@/app/components/EditForm";

const getDataById = async (id) =>{
    try {
        const res = await fetch(`http://localhost:3000/api/data/${id}`, {cache: 'no-store'})

        if(!res.ok){
            throw new Error('Failed to fetch Data')
        }
        console.log(res)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export default async function Edit({ params }){    
    const { id } = params;
    const { data } = await getDataById(id)
    const {
        name,
        age,
        nationalcode,
        phone,
        vehicle,
        model,
        fuel,
        email,
        owner,
        ownercode,
        province,
        city,
        address,
        staticphone,
        lat,
        long,
        product,
        typsof,
        partners,
        watersource
    } = data
    
    console.log(data)
    return (
        <EditForm id={id}
            name={name}
            age={age}
            nationalcode={nationalcode}
            phone={phone}
            vehicle={vehicle}
            model={model}
            fuel={fuel}
            email={email}
            owner={owner}
            ownercode={ownercode}
            province={province}
            city={city}
            address={address}
            staticphone={staticphone}
            lat={lat}
            long={long}
            product={product}
            typsof={typsof}
            partners={partners}
            watersource={watersource}
        />
    )
}