import { mdiAbacus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Abacus(props: IconComponentProps) {
  return <Icon path={mdiAbacus} {...props} />;
}

export { mdiAbacus as path };
