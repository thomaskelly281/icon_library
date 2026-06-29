import { mdiAllergy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Allergy(props: IconComponentProps) {
  return <Icon path={mdiAllergy} {...props} />;
}

export { mdiAllergy as path };
