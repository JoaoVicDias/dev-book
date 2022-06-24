export default function inputValidation(
  validationRules: {
    isRequired: boolean;
  },
  value: string
) {
  let isValid = true;

  if (validationRules.isRequired) {
    isValid = value.length > 0 && isValid;
  }

  return isValid;
}
