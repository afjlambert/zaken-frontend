import { FormPositioner } from "@amsterdam/scaffold-form/package"
import { Fields } from "app/components/shared/Form/ScaffoldFields"
import InfoButton from "app/components/shared/InfoHeading/InfoButton"
import navigateTo from "app/routing/navigateTo"

export default (caseId: Components.Schemas.Case["id"], summons: Components.Schemas.SummonType[]) => {

  const summonTypes = summons.reduce((acc, cur) => {
    acc[`${ cur.id }`] = cur.name
    return acc
  }, {} as Record<string, string>)

  const fields = {
    type: {
      type: "SelectField",
      props: {
        isRequired: true,
        withEmptyOption: true,
        label: "Welke aanschrijving is opgesteld?",
        extraLabel: <InfoButton infoTitle="TODO Aanschrijvingen" infoText="TODO Uitleg over aanschrijvingen"></InfoButton>,
        name: "type",
        options: summonTypes
      }
    },
    persons: {
      type: "ArrayField",
      props: {
        label: "Aan wie is de aanschrijving gericht?",
        name: "persons",
        allowAdd: true,
        allowRemove: true,
        minItems: 1,
        maxItems: 2,
        scaffoldFields: {
          first_name: {
            type: "TextField",
            props: {
              placeholder:"Voornaam",
              name: "first_name",
              isRequired: true
            }
          },
          preposition: {
            type: "TextField",
            props: {
              placeholder:"Tussenvoegsel",
              name: "preposition"
            }
          },
          last_name: {
            type: "TextField",
            props: {
              placeholder: "Achternaam",
              name: "last_name",
              isRequired: true
            }
          }
        }
      }
    },
    description: {
      type: "TextAreaField",
      props: {
        label: "Korte toelichting",
        extraLabel: "(Niet verplicht)",
        name: "description"
      }
    },
    submit: {
      type: "SubmitButton",
      props: {
        label: "Resultaat verwerken"
      }
    },
    secondaryButton: {
      type: "Button",
      props: {
        label: "Annuleren",
        variant: "primaryInverted",
        onClick: () => navigateTo(`/zaken/${ caseId }`)
      }
    }
  }

  return new FormPositioner(fields as Fields)
    .setGrid("laptop", "1fr 1fr 1fr", [
      ["type", "type", "type"],
      ["persons", "persons", "persons"],
      ["description", "description", "description"],
      ["submit", "secondaryButton"]
    ])
    .getScaffoldProps()
}

