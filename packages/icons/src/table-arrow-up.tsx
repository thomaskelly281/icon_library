import { mdiTableArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableArrowUp(props: IconComponentProps) {
  return <Icon path={mdiTableArrowUp} {...props} />;
}

export { mdiTableArrowUp as path };
