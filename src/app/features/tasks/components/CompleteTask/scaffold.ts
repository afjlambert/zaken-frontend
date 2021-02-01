import { FormPositioner } from "@amsterdam/scaffold-form/package"
import { Fields } from "app/features/shared/components/molecules/Form/ScaffoldFields"


const Scaffold = (onCancel: () => void) => {
  const fields = {
    completed: {
      type: "CheckboxFields",
      props: {
        name: "completed",
        label: "",
        isRequired: true,
        options: {
          completed: "Ja, deze taak is afgerond"
        }
      }
    },
    submit: {
      type: "SubmitButton",
      variant: "primary",
      props: {
        label: "Taak afronden"
      }
    },
    cancel: {
      type: "Button",
      props: {
        label: "Annuleer",
        variant: "primaryInverted",
        onClick: onCancel 
      }
    }
  }

  return new FormPositioner(fields as Fields)
    .setGrid("laptop", "1fr 1fr", [
      ["completed","completed"],
      ["cancel", "submit"]
    ])
    .getScaffoldProps()
}

export default Scaffold