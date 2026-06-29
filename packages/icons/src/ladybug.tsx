import { mdiLadybug } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ladybug(props: IconComponentProps) {
  return <Icon path={mdiLadybug} {...props} />;
}

export { mdiLadybug as path };
