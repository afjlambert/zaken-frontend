import { FormTitle } from "@amsterdam/asc-ui"

import { useCase, useDecisions } from "app/state/rest/"
import WorkflowForm from "app/components/case/WorkflowForm/WorkflowForm"
import scaffold from "app/components/case/forms/DecisionForm/scaffold"
import useScaffoldedFields from "app/components/shared/ConfirmScaffoldForm/hooks/useScaffoldedFields"
import FormWithExtraLabel from "app/components/shared/FormWithExtraLabel/FormWithExtraLabel"
import DecisionHeader from "./components/DecisionHeader"
import { useDecisionTypes } from "app/state/rest/themes"

type Props = {
  id: Components.Schemas.Case["id"]
  camundaTaskId: Components.Schemas.CamundaTask["camunda_task_id"]
}

type DecisionData = Omit<Components.Schemas.Decision, "decision_type"> & { decision_type: { id: number } }
const mapData = (data: DecisionData) => ({ ...data, decision_type: data.decision_type.id })

const DecisionForm: React.FC<Props> = ({ id, camundaTaskId }) => {

  const [caseItem] = useCase(id)
  const themeId = caseItem?.theme.id
  const [data] = useDecisionTypes(themeId)
  const decisionTypes = data?.results

  const fields = useScaffoldedFields(scaffold, id, decisionTypes)

  const [, { execPost }] = useDecisions({ lazy: true })

  return (
    <>
      <DecisionHeader caseId={ id }/>
      <FormTitle>Gebruik dit formulier om aan te geven welk besluit is genomen</FormTitle>
      <FormWithExtraLabel>
      <WorkflowForm
          id={ id }
          fields={ fields }
          mapData={ mapData }
          postMethod={ execPost }
          camundaTaskId={ camundaTaskId }
      />
      </FormWithExtraLabel>
    </>
  )
}

export default DecisionForm