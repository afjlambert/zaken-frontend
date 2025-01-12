
import { FormTitle } from "@amsterdam/asc-ui"

import { useCorrespondences, useCorrespondence } from "app/state/rest/"
import scaffold from "app/components/case/forms/CorrespondenceForm/scaffold"
import useScaffoldedFields from "app/components/shared/ConfirmScaffoldForm/hooks/useScaffoldedFields"
import WorkflowForm from "app/components/case/WorkflowForm/WorkflowForm"
import FormWithExtraLabel from "app/components/shared/FormWithExtraLabel/FormWithExtraLabel"

type Props = {
  id: Components.Schemas.Case["id"]
}

const CorrespondenceForm: React.FC<Props> = ({ id }) => {

  const [correspondences] = useCorrespondences()
  const [, { execPost }] = useCorrespondence()

  const fields = useScaffoldedFields(scaffold, id, correspondences)

  return (
    <>
      <FormTitle>Gebruik dit formulier om notitie van correspondentie toe te voegen</FormTitle>
      <FormWithExtraLabel>
        <WorkflowForm
          id={ id }
          fields={ fields }
          postMethod={ execPost }
        />
      </FormWithExtraLabel>
    </>
  )
}

export default CorrespondenceForm
