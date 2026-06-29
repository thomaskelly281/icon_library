import { mdiCheckboxMultipleMarked } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMultipleMarked(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMultipleMarked} {...props} />;
}

export { mdiCheckboxMultipleMarked as path };
