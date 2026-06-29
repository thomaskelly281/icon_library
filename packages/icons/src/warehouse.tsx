import { mdiWarehouse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Warehouse(props: IconComponentProps) {
  return <Icon path={mdiWarehouse} {...props} />;
}

export { mdiWarehouse as path };
