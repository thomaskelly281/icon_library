import { mdiGenderMaleFemale } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GenderMaleFemale(props: IconComponentProps) {
  return <Icon path={mdiGenderMaleFemale} {...props} />;
}

export { mdiGenderMaleFemale as path };
