export default (data?: Components.Schemas.VakantieverhuurReportInformation | null) => {
  if (data == null) return

  const { rented_days_count, is_rented_today, planned_days_count } = data

  const values = [
    ["Nachten verhuurd", <strong>{ rented_days_count }</strong>],
    ["Vandaag verhuurd", is_rented_today ? "Ja" : "Nee"],
    ["Nachten gepland", planned_days_count]
  ]
  return Object.fromEntries(values)
}