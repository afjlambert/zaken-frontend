import { FormPositioner } from "@amsterdam/scaffold-form/package"
import { Fields } from "app/components/shared/Form/ScaffoldFields"
import navigateTo from "app/routing/navigateTo"

export default (id: Components.Schemas.Case["id"], processes?: Components.Schemas.CamundaProcess[]) => {

  const fields = {
    camundaProcess: {
      type: "ComplexSelectField",
      props: {
        name: "camundaProcess",
        label: "Taak opvoeren",
        optionLabelField: "name",
        withEmptyOption: true,
        emptyOptionLabel: "Selecteer een taak",
        isRequired: true,
        options: processes
      }
    },
    cancel: {
      type: "Button",
      props: {
        label: "Annuleren",
        variant: "primaryInverted",
        onClick: () => navigateTo("/zaken/:id", { id })
      }
    },
    submit: {
      type: "SubmitButton",
      props: {
        variant: "tertiary",
        label: "Taak opvoeren",
        align: "right"
      }
    }
  }

  return new FormPositioner(fields as Fields)
    .setGrid("mobileS", "1fr 1fr", [
      ["camundaProcess", "camundaProcess"],
      ["cancel", "submit"]
    ])
    .getScaffoldProps()
}
