import ViewMap from "@/app/components/ViewMap"



export default async function ShowMap({ params }) {
    const id = params.id;
    if (!id) {
      return Error('Not found id')
    }

    
    const res = await fetch(`/api/data/${id}`, {
      cache: "no-store", // اگه می‌خوای SSR باشه
    });
    const data = await res.json();
    if (!data) {
      return Error('Not FOund')
    }
    
    return (
      <div>
        <ViewMap data={data.data.coordinates} />
      </div>
    );
  }