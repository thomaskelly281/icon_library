import { mdiCheckboxIntermediate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxIntermediate(props: IconComponentProps) {
  return <Icon path={mdiCheckboxIntermediate} {...props} />;
}

export { mdiCheckboxIntermediate as path };
