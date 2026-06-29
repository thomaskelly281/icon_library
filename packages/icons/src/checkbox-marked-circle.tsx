import { mdiCheckboxMarkedCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMarkedCircle(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMarkedCircle} {...props} />;
}

export { mdiCheckboxMarkedCircle as path };
