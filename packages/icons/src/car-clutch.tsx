import { mdiCarClutch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarClutch(props: IconComponentProps) {
  return <Icon path={mdiCarClutch} {...props} />;
}

export { mdiCarClutch as path };
