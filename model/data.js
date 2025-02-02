import mongoose , {Schema} from 'mongoose';

const dataSchema = new mongoose.Schema({
    name: { type: String, required: true }, // نام و نام خانوادگی
    age: { type: Date, required: true }, // تاریخ تولد
    from: { type: String, required: true }, // صادره از
    nationalcode: { type: String, required: true }, // کد ملی
    phone: { type: String, required: true }, // شماره تماس
    vehicle: { type: String, required: true }, // نوع دستگاه
    model: { type: String, required: true }, // مدل دستگاه
    fuel: { type: String, required: true }, // مصرف سوخت
    email: { type: String, required: true }, // ایمیل
    owner: { type: String, required: true }, // نام مالک
    ownercode: { type: String, required: true }, // کد ملی مالک
    province: { type: String, required: true }, // استان
    city: { type: String, required: true }, // شهرستان
    address: { type: String, required: true }, // آدرس
    staticphone: { type: String, required: true }, // شماره ثابت
    lat: { type: String, required: true }, // طول جغرافیایی
    long: { type: String, required: true }, // عرض جغرافیایی
    product: { type: String, required: true }, // محصول
    typsof: { type: String, required: true }, // نوع کشت
    partners: { type: Number, required: true }, // تعداد شرکا
    watersource: { type: String, required: true }, // منبع آبی
    }
);

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);

export default Data