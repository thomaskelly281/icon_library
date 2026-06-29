import { mdiCheckboxMarked } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxMarked(props: IconComponentProps) {
  return <Icon path={mdiCheckboxMarked} {...props} />;
}

export { mdiCheckboxMarked as path };
