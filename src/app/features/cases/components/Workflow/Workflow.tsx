import React, { useCallback, useMemo } from "react"
import { Button, Icon } from "@amsterdam/asc-ui"

import { useCaseTasks, useTaskComplete } from "app/state/rest"
import ButtonLink from "app/features/shared/components/atoms/ButtonLink/ButtonLink"
import to from "app/features/shared/routing/to"
import WorkflowStatus from "./WorkflowStatus"
import CompleteTaskForm from "app/features/tasks/components/CompleteTask/CompleteTaskForm"
import LockOpen from "@material-ui/icons/LockOpen"

type Props = {
  caseId: Components.Schemas.Case["id"]
  summonId?: number
}
type TaskAction = {
  title: string
  target: string
}

export const taskActionMap = {
  task_create_visit: { title: "Huisbezoek aanmaken", target: "visits" },
  task_create_debrief: { title: "Debrief verwerken", target: "debriefing" }
} as Record<string, TaskAction>

const Workflow: React.FC<Props> = ({ caseId }) => {
  const dataTasks = useCaseTasks(caseId).data
  const { execPost } = useTaskComplete({ lazy: true })

  const mapTaskData = useCallback((data: Components.Schemas.CamundaTask) => {
    const action = taskActionMap[data.task_name_id] ?? {}
    
    const onSubmitTaskComplete = () => (
      execPost({ camunda_task_id: data.camunda_task_id, variables: {} })
    )

  return ({
    itemList: [
      <Icon size={32}>{ <LockOpen /> }</Icon>,
      data.name,
      "-uitvoerder-",
      "-datum-",
      action.target ?
      <ButtonLink to={ to(`/cases/:id/${ action.target }`, { id: caseId })}>
        <Button variant="primary" as="span">{ action.title }</Button>
      </ButtonLink> :
      <CompleteTaskForm onSubmit={ onSubmitTaskComplete } />
    ]
  })
}, [ caseId, execPost ])

  const mappedTaskData = useMemo(() => dataTasks?.map(mapTaskData), [ mapTaskData, dataTasks ])

  return (
    <WorkflowStatus status="" data={mappedTaskData} />
  )
}

export default Workflow