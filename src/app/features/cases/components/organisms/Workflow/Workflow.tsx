import React from "react"
import { Button, Icon } from "@datapunt/asc-ui"

import { useCaseEvents } from "app/state/rest"
import workflow from "app/state/workflow/workflow"
import { EditDocument } from "@datapunt/asc-assets"
import ButtonLink from "app/features/shared/components/atoms/ButtonLink/ButtonLink"
import to from "app/features/shared/routing/to"
import WorkflowStatus from "./WorkflowStatus"

type Props = {
  caseId: Components.Schemas.Case["id"]
}

const workflowDebrief = (caseId: number) => [
  [ <Icon size={ 20 }><EditDocument /></Icon>, "Verwerken Debrief", "ProjectHandhaver", "-", "-",
    <ButtonLink to={ to("/cases/:caseId/debriefing", { caseId })}>
      <Button variant="primary" as="span">Debrief verwerken</Button>
    </ButtonLink>
  ]
]

const workflowVisit = [
  [ <Icon size={ 20 }><EditDocument /></Icon>, "Huisbezoek afleggen", "Toezichthouders", "-", "-", "" ]
]

const workflowViolation = [
  [ <Icon size={ 20 }><EditDocument /></Icon>, "Opstellen beeldverslag", "Toezichthouder", "-", "-", "" ],
  [ <Icon size={ 20 }><EditDocument /></Icon>, "Opstellen rapport van bevindingen", "Toezichthouder", "-", "-", "" ],
  [ <Icon size={ 20 }><EditDocument /></Icon>, "Opstellen aanschrijving", "Projecthandhaver", "-", "-", "" ]
]

const workflowCloseCase = [
  [ <Icon size={ 20 }><EditDocument /></Icon>, "Opstellen buitendienst rapport", "Toezichthouder", "-", "-", "" ],
  [ <Icon size={ 20 }><EditDocument /></Icon>, "Afsluiten zaak", "Projectmederker", "-", "-", "" ]
]

const Workflow: React.FC<Props> = ({ caseId }) => {
  const { data } = useCaseEvents(caseId)
  const {
    shouldCreateVisit,
    shouldCreateDebriefing,
    shouldCloseCase,
    shouldCreateViolation,
    shouldCreateAdditionalVisit
  } = workflow(data)

  return (
    <div>
      { (shouldCreateVisit || shouldCreateAdditionalVisit) &&
        <WorkflowStatus status="Huisbezoek" data={workflowVisit} />
      }
      { shouldCreateDebriefing &&
        <WorkflowStatus status="Debrief" data={workflowDebrief(caseId)} />
      }
      { shouldCloseCase &&
        <WorkflowStatus status="Zaak afsluiten" data={workflowCloseCase} showBWVMessage={true} />
      }
      { shouldCreateViolation &&
        <WorkflowStatus status="Overtreding" data={workflowViolation} showBWVMessage={true} />
      }
    </div>
  )
}

export default Workflow
