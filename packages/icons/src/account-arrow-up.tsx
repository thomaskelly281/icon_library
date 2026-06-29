import { mdiAccountArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountArrowUp(props: IconComponentProps) {
  return <Icon path={mdiAccountArrowUp} {...props} />;
}

export { mdiAccountArrowUp as path };
