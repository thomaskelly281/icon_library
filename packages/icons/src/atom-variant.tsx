import { mdiAtomVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AtomVariant(props: IconComponentProps) {
  return <Icon path={mdiAtomVariant} {...props} />;
}

export { mdiAtomVariant as path };
