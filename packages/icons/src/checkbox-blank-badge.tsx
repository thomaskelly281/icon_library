import { mdiCheckboxBlankBadge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckboxBlankBadge(props: IconComponentProps) {
  return <Icon path={mdiCheckboxBlankBadge} {...props} />;
}

export { mdiCheckboxBlankBadge as path };
