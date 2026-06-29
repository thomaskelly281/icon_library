import { mdiSprinkler } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sprinkler(props: IconComponentProps) {
  return <Icon path={mdiSprinkler} {...props} />;
}

export { mdiSprinkler as path };
