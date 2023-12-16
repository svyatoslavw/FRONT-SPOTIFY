export function formatDate(dateString: string) {
  const date = new Date(dateString)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Месяцы отсчитываются от 0 в cavaScript
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}
