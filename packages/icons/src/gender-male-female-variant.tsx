import { mdiGenderMaleFemaleVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GenderMaleFemaleVariant(props: IconComponentProps) {
  return <Icon path={mdiGenderMaleFemaleVariant} {...props} />;
}

export { mdiGenderMaleFemaleVariant as path };
