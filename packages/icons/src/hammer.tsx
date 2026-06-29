import { mdiHammer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hammer(props: IconComponentProps) {
  return <Icon path={mdiHammer} {...props} />;
}

export { mdiHammer as path };
