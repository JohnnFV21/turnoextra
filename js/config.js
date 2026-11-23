// Conexión con Supabase.
// La clave "publishable" es pública por diseño: la protegen las reglas de seguridad de la base de datos.
const SUPABASE_URL = "https://amdofdzibxjakvyzntfg.supabase.co";
const SUPABASE_KEY = "sb_publishable_1r7uaNRmLNPu7JDH-ghHuw_2LoqCPDk";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);