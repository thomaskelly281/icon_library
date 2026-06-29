import { mdiServerPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerPlus(props: IconComponentProps) {
  return <Icon path={mdiServerPlus} {...props} />;
}

export { mdiServerPlus as path };
