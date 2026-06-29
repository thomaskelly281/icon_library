import { mdiOneUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OneUp(props: IconComponentProps) {
  return <Icon path={mdiOneUp} {...props} />;
}

export { mdiOneUp as path };
