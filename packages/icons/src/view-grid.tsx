import { mdiViewGrid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewGrid(props: IconComponentProps) {
  return <Icon path={mdiViewGrid} {...props} />;
}

export { mdiViewGrid as path };
