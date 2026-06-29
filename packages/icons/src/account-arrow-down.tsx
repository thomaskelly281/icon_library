import { mdiAccountArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountArrowDown(props: IconComponentProps) {
  return <Icon path={mdiAccountArrowDown} {...props} />;
}

export { mdiAccountArrowDown as path };
