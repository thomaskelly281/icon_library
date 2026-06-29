import { mdiIvBag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IvBag(props: IconComponentProps) {
  return <Icon path={mdiIvBag} {...props} />;
}

export { mdiIvBag as path };
