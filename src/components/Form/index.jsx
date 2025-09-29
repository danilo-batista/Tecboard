import { Button } from "./Button";
import { FormComboBox } from "./FormComboBox";
import { FormFieldSet } from "./FormFieldSet";
import { FormInput } from "./FormInput";
import { FormLabel } from "./FormLabel";
import { FormTitle } from "./FormTitle";
import styles from "./form.module.css";

export function Form({ themes, onSubmit }) {
  function onFormSubmit(formData) {

    const event = {
      cover: formData.get("eventCover"),
      theme: themes.find((theme) => {
        return theme.id === Number(formData.get("eventTheme"));
      }),
      date: new Date(formData.get("eventDate")),
      title: formData.get("eventName"),
      description: formData.get("eventDescription")
    };
    onSubmit(event);
  }

  return (
    <form className={styles.formContainer} action={onFormSubmit}>
      <FormTitle>Preencha para criar um evento:</FormTitle>
      <div className={styles.formInputs}>
        <FormFieldSet>
          <FormLabel htmlFor="eventNameId">Qual é o nome do evento?</FormLabel>
          <FormInput
            type="text"
            id="eventNameId"
            name="eventName"
            placeholder="Summer Dev hits"
          />
        </FormFieldSet>

        <FormFieldSet>
          <FormLabel htmlFor="eventCoverId">
            Qual é a imagem do evento?
          </FormLabel>
          <FormInput
            type="text"
            id="eventCoverId"
            name="eventCover"
            placeholder="Escolha a capa aqui..."
          />
        </FormFieldSet>

        <FormFieldSet>
          <FormLabel htmlFor="eventDescriptionId">
            Qual é a descrição do evento?
          </FormLabel>
          <FormInput
            type="text"
            id="eventDescriptionId"
            name="eventDescription"
            placeholder="O evento é sobre..."
          />
        </FormFieldSet>

        <FormFieldSet>
          <FormLabel htmlFor="eventDateId">Data do evento:</FormLabel>
          <FormInput type="date" id="eventDateId" name="eventDate" />
        </FormFieldSet>
        
        <FormFieldSet>
          <FormLabel htmlFor="eventThemeId">Tema do evento:</FormLabel>
          <FormComboBox id="eventThemeId" name="eventTheme" themes={themes} />
        </FormFieldSet>
      </div>

      <div className={styles.formContainer__button}>
        <Button>Criar evento</Button>
      </div>
    </form >
  );
}
