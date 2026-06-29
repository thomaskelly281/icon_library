import { mdiTagArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagArrowUp(props: IconComponentProps) {
  return <Icon path={mdiTagArrowUp} {...props} />;
}

export { mdiTagArrowUp as path };
