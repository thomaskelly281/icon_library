import { mdiCheckboxBlankCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxBlankCircle(props: IconComponentProps) {
  return <Icon path={mdiCheckboxBlankCircle} {...props} />;
}

export { mdiCheckboxBlankCircle as path };
