import { mdiCarInfo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarInfo(props: IconComponentProps) {
  return <Icon path={mdiCarInfo} {...props} />;
}

export { mdiCarInfo as path };
