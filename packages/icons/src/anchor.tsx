import { mdiAnchor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Anchor(props: IconComponentProps) {
  return <Icon path={mdiAnchor} {...props} />;
}

export { mdiAnchor as path };
