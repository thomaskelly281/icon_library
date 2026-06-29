import { mdiCheckboxBlankOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxBlankOff(props: IconComponentProps) {
  return <Icon path={mdiCheckboxBlankOff} {...props} />;
}

export { mdiCheckboxBlankOff as path };
