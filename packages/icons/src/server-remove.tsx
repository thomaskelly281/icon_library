import { mdiServerRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerRemove(props: IconComponentProps) {
  return <Icon path={mdiServerRemove} {...props} />;
}

export { mdiServerRemove as path };
