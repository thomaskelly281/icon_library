import { mdiTableArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableArrowDown(props: IconComponentProps) {
  return <Icon path={mdiTableArrowDown} {...props} />;
}

export { mdiTableArrowDown as path };
