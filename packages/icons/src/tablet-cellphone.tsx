import { mdiTabletCellphone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TabletCellphone(props: IconComponentProps) {
  return <Icon path={mdiTabletCellphone} {...props} />;
}

export { mdiTabletCellphone as path };
