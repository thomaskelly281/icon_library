import { mdiCheckboxBlank } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxBlank(props: IconComponentProps) {
  return <Icon path={mdiCheckboxBlank} {...props} />;
}

export { mdiCheckboxBlank as path };
