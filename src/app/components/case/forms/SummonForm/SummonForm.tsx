
import { FormTitle } from "@amsterdam/asc-ui"

import { useCase, useSummons, useSummonTypes } from "app/state/rest/"
import WorkflowForm from "app/components/case/WorkflowForm/WorkflowForm"
import scaffold from "app/components/case/forms/SummonForm/scaffold"
import useScaffoldedFields from "app/components/shared/ConfirmScaffoldForm/hooks/useScaffoldedFields"
import FormWithExtraLabel from "app/components/shared/FormWithExtraLabel/FormWithExtraLabel"

type Props = {
  id: Components.Schemas.Case["id"]
}

type SummonData = Omit<Components.Schemas.Summon, "type"> & { type: { id: number } }
const mapData = (data: SummonData) => ({ ...data, type: data.type.id })

const SummonForm: React.FC<Props> = ({ id }) => {

  const teamId = useCase(id)[0]?.team.id
  const [data] = useSummonTypes(teamId)
  const summonTypes = data?.results
  const fields = useScaffoldedFields(scaffold, id, summonTypes)

  const [, { execPost }] = useSummons({ lazy: true })

  return (
    <>
      <FormTitle>Meld welke aanschrijving is opgesteld en voor wie. Doe dit nadat de brief daadwerkelijk verstuurd is.</FormTitle>
      <FormWithExtraLabel>
        <WorkflowForm
          id={ id }
          fields={ fields }
          mapData={ mapData }
          postMethod={ execPost }
        />
      </FormWithExtraLabel>
    </>
  )
}

export default SummonForm