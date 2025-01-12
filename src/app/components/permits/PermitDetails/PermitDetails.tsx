import { useMemo } from "react"
import { Link } from "@amsterdam/asc-ui"
import { DateDisplay } from "@amsterdam/wonen-ui"
import DefinitionList from "app/components/shared/DefinitionList/DefinitionList"

type Props = {detail: Components.Schemas.DecosPermit}

const permitType = {
  BED_AND_BREAKFAST: "Bed and breakfast",
  VAKANTIEVERHUUR: "Vakantieverhuur",
  PERMIT_UNKNOWN: "Onbekend"
}

const PermitDetail: React.FC<Props> = ({ detail }) => {
  const { permit_granted, permit_type, date_from, date_to, decos_join_web_url } = detail
  const values = useMemo(() => ({
    "Vergunning": permit_granted ? "ja" : "nee" ,
    "Begindatum": date_from ? <DateDisplay date= { date_from } /> : "-" ,
    "Einddatum": date_to ? <DateDisplay date={ date_to } /> : "-"

  }),[date_from, date_to, permit_granted])

  return (
  <>
    <DefinitionList
      numInitialVisibleRows={3}
      title= { permit_type ?  permitType[ permit_type ] : "" }
      values={values}
      headingSize="h3"
    />
    { decos_join_web_url && permit_type &&
      <Link href={ decos_join_web_url } variant="inline" icon="external" target="_blank" rel="noreferer">
        { permitType[ permit_type ] } vergunning
      </Link>
    }
  </>
  )
}
export default PermitDetail
