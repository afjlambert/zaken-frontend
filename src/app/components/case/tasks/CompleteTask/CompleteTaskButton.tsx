import { useModal } from "app/components/shared/Modal/hooks/useModal"
import TableAction from "app/components/shared/Table/components/TableAction/TableAction"
import CompleteTaskModal from "./CompleteTaskModal"

type Props = {
  onSubmit: (variables: Components.Schemas.CamundaTaskComplete["variables"]) => Promise<unknown>
  taskName: string
  caseId: number
  disabled: boolean
}

const CompleteTaskButton: React.FC<Props> = ({ onSubmit, taskName, caseId, disabled }) => {

  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <>
      <TableAction onClick={ openModal } disabled={ disabled }>Taak afronden</TableAction>
      <CompleteTaskModal
        taskName={ taskName }
        caseId={ caseId }
        onSubmit={ onSubmit }
        isOpen={ isModalOpen }
        closeModal={ closeModal }
      />
    </>
  )
}

export default CompleteTaskButton
