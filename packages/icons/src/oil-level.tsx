import { mdiOilLevel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OilLevel(props: IconComponentProps) {
  return <Icon path={mdiOilLevel} {...props} />;
}

export { mdiOilLevel as path };
