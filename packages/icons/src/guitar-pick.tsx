import { mdiGuitarPick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GuitarPick(props: IconComponentProps) {
  return <Icon path={mdiGuitarPick} {...props} />;
}

export { mdiGuitarPick as path };
