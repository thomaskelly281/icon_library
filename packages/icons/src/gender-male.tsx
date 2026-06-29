import { mdiGenderMale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GenderMale(props: IconComponentProps) {
  return <Icon path={mdiGenderMale} {...props} />;
}

export { mdiGenderMale as path };
