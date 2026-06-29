import { mdiCheckboxMultipleMarkedCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMultipleMarkedCircle(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMultipleMarkedCircle} {...props} />;
}

export { mdiCheckboxMultipleMarkedCircle as path };
