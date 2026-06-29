import { mdiVolumeMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeMedium(props: IconComponentProps) {
  return <Icon path={mdiVolumeMedium} {...props} />;
}

export { mdiVolumeMedium as path };
