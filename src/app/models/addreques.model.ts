export class Addrequest {
  request_id: number;
  main_service: string; // d ele hya el category  (خدمات جامعية و نوادي و شهادات عليا ....)
  service: string; // d ele hya el 5edma (شهادة جامعية , بيان درجات , دليل مواد  ... )
  service_type: string; // d ele hya no3 el 5edma  (استخراج نسخة , ظرف مغلق من الكلية , توثيق السفارة .....)
  main_details: string; // da 2li howa l label 2li mawgoud f table ltype services (اسم الجامعة ,  عنوان الجهة المستلمة بالإنجليزي .....)
  services_address: string; // da 2li hatktb mn l user
  details: string; // d htb2a el tfaseel ele el user hyktbha m3a kol request hyb3to hyktbo f text area
  replay_details: string; // d htb2a mn el admin bta3 el dashboard بيبقي في انتظار
  total_cost: number; // d el total bta3 el taklfa kolha بيبقي في انتظار
  duration: string; //btb2a في انتظار لحد ما الأدمن يغيرها
  status: string; //بتتسجل في wait لحد ما الادمن برضه يغيرها
  notes: string; // بتبقي في انتظار لحد ما الادمن يكتبه
  created_at; // dh byb2a el data type bta3o time stamp
}
