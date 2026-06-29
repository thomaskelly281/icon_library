import { mdiTagPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagPlus(props: IconComponentProps) {
  return <Icon path={mdiTagPlus} {...props} />;
}

export { mdiTagPlus as path };
