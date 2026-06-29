import { mdiTagArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagArrowDown(props: IconComponentProps) {
  return <Icon path={mdiTagArrowDown} {...props} />;
}

export { mdiTagArrowDown as path };
