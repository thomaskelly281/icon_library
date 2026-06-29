import { mdiAtom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Atom(props: IconComponentProps) {
  return <Icon path={mdiAtom} {...props} />;
}

export { mdiAtom as path };
