import { mdiCellphoneCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CellphoneCog(props: IconComponentProps) {
  return <Icon path={mdiCellphoneCog} {...props} />;
}

export { mdiCellphoneCog as path };
