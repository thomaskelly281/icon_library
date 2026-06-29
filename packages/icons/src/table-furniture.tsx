import { mdiTableFurniture } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableFurniture(props: IconComponentProps) {
  return <Icon path={mdiTableFurniture} {...props} />;
}

export { mdiTableFurniture as path };
