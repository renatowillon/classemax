//Formatação de data para trazer dia e mês ex: 18 FEV
export const formatarData = (data: string) => {
  const date = new Date(data)
  const dia = String(date.getDate() + 1).padStart(2, '0')
  const mes = date.toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase().replace('.', '')
  return { dia, mes }
}
