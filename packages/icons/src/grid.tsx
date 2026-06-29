import { mdiGrid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Grid(props: IconComponentProps) {
  return <Icon path={mdiGrid} {...props} />;
}

export { mdiGrid as path };
