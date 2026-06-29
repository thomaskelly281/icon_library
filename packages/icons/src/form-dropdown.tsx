import { mdiFormDropdown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormDropdown(props: IconComponentProps) {
  return <Icon path={mdiFormDropdown} {...props} />;
}

export { mdiFormDropdown as path };
