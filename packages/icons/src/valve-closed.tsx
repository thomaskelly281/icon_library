import { mdiValveClosed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ValveClosed(props: IconComponentProps) {
  return <Icon path={mdiValveClosed} {...props} />;
}

export { mdiValveClosed as path };
