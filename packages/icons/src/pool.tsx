import { mdiPool } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pool(props: IconComponentProps) {
  return <Icon path={mdiPool} {...props} />;
}

export { mdiPool as path };
