import React, { useMemo } from "react"
import { Link } from "@datapunt/asc-ui"
import { usePermitCheckmarks } from "app/state/rest"
import Heading from "app/features/shared/components/atoms/Heading/Heading"
import Details from "app/features/shared/components/molecules/Details/Details"
import to from "app/features/shared/routing/to"

type Props = {
  bagId: string
}

const PermitOverview: React.FC<Props> = ({ bagId }) => {
  const { data, isBusy } = usePermitCheckmarks(bagId)

  const values = useMemo(() => ({
    "Bed & Breakfast": data?.has_b_and_b_permit ? "Ja" : "Nee",
    "Vakantieverhuur": data?.has_vacation_rental_permit ? "Ja" : "Nee"
  }), [data])

  return (
    <>
      <Heading>Vergunningen</Heading>
      <Details isLoading={isBusy} numLoadingRows={2} values={values} />
      <Link href={ to("/adres/:bagId/vergunningen", { bagId }) } variant="inline" inList>Vergunning details</Link>
    </>
  )
}
export default PermitOverview