import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  const data = await supabase.from('cliente').select('*')

  return Response.json(data.data)
}
