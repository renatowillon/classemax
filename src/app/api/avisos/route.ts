import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase.from('avisos').select('*')

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json(data)
}

export async function POST(request: Request) {
  try {
    const { titulo, descricao } = await request.json()

    if (!titulo || !descricao) {
      return Response.json({ error: 'Título e descrição são obrigatórios' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('avisos')
      .insert([{ titulo, descricao }])
      .select()
      .single()

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json(data, { status: 201 })
  } catch (error) {
    return Response.json({ error: 'Erro ao processar a solicitação' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, titulo, descricao } = await request.json()

    if (!id || !titulo || !descricao) {
      return Response.json({ error: 'ID, título e descrição são obrigatórios' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('avisos')
      .update({ titulo, descricao })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Erro ao processar a solicitação' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()

    if (!id) {
      return Response.json({ error: 'ID é obrigatório' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('avisos')
      .update({ status: false }) // Alterando o status para false ao invés de deletar
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Erro ao processar a solicitação' }, { status: 500 })
  }
}
