import { mdiGenderFemale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GenderFemale(props: IconComponentProps) {
  return <Icon path={mdiGenderFemale} {...props} />;
}

export { mdiGenderFemale as path };
