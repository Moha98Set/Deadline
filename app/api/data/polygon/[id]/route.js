import connectMongoDb from "@/libs/mongodb";
import Data from "@/model/data";

export async function PUT(req, { params }) {
  try {
    await connectMongoDb()
    const { id } = params
    const body = await req.json()

    console.log('🛰️ ID:', id)
    console.log('📦 Data received:', body)

    const result = await Data.findByIdAndUpdate(
      id,
      { $set: { coordinates: body.polygonCoords } },
      { new: true }
    )

    if (!result) {
      console.error('❌ Document not found')
      return Response.json({ error: 'Not found' }, { status: 404 })
    }

    return Response.json({ message: 'Data updated successfully' })
  } catch (err) {
    console.error('❌ Update error:', err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
