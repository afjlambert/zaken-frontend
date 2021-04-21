import { FC } from "react"
import { FormTitle } from "@amsterdam/asc-ui"

import { useCamundaProcesses, useCamundaProcess } from "app/state/rest"
import scaffold from "./scaffold"
import useScaffoldedFields from "app/components/shared/ConfirmScaffoldForm/hooks/useScaffoldedFields"
import FormWithExtraLabel from "app/components/shared/FormWithExtraLabel/FormWithExtraLabel"
import WorkflowForm from "app/components/case/Workflow/WorkflowForm"

type Props = {
  id: Components.Schemas.Case["id"]
}

const mapData = (data: { camundaProcess: Components.Schemas.CamundaProcess }) => ({ camunda_process_id: data.camundaProcess.id })

const TaskForm: FC<Props> = ({ id }) => {

  const [processes] = useCamundaProcesses(id)
  const fields = useScaffoldedFields(scaffold, id, processes as Components.Schemas.CamundaProcess[])
  const [, { execPost }] = useCamundaProcess(id, { lazy: true })
  const postMethod = async (data: { camundaProcess: Components.Schemas.CamundaProcess }) => await execPost(mapData(data))

  return (
    <>
      <FormTitle>Gebruik dit formulier om een taak op te voeren</FormTitle>
      <FormWithExtraLabel>
        <WorkflowForm
          id={ id }
          fields={ fields }
          postMethod={ postMethod }
        />
      </FormWithExtraLabel>
    </>
  )
}

export default TaskForm