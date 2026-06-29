import { mdiRing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ring(props: IconComponentProps) {
  return <Icon path={mdiRing} {...props} />;
}

export { mdiRing as path };
