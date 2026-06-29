import { mdiSprout } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sprout(props: IconComponentProps) {
  return <Icon path={mdiSprout} {...props} />;
}

export { mdiSprout as path };
