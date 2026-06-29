import { mdiDotsGrid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsGrid(props: IconComponentProps) {
  return <Icon path={mdiDotsGrid} {...props} />;
}

export { mdiDotsGrid as path };
