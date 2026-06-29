import { mdiSurroundSound } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SurroundSound(props: IconComponentProps) {
  return <Icon path={mdiSurroundSound} {...props} />;
}

export { mdiSurroundSound as path };
