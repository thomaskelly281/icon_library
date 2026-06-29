import { mdiCogs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cogs(props: IconComponentProps) {
  return <Icon path={mdiCogs} {...props} />;
}

export { mdiCogs as path };
