import { mdiUngroup } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ungroup(props: IconComponentProps) {
  return <Icon path={mdiUngroup} {...props} />;
}

export { mdiUngroup as path };
