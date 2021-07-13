import useValues from "./hooks/useValues"
import { PersonNameDisplay } from "@amsterdam/wonen-ui"
import { DefinitionList } from "@amsterdam/wonen-ui"

type Props = {
  resident: Components.Schemas.Resident
  num: number
}

const Resident: React.FC<Props> = ({ resident, num }) => {
  const title = <>
    { `${ num }. ` }
    <PersonNameDisplay
      sex={ resident.geslachtsaanduiding }
      firstName={ `${ resident.voorletters }.` }
      namePrefix={ resident.voorvoegsel_geslachtsnaam }
      name={ resident.geslachtsnaam }
    />
  </>
  const values = useValues(resident)

  return (
    <DefinitionList
      title={ title }
      headingSize="h3"
      values={ values }
    />
  )
}
export default Resident
