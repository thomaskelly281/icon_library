import { mdiCircleMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleMedium(props: IconComponentProps) {
  return <Icon path={mdiCircleMedium} {...props} />;
}

export { mdiCircleMedium as path };
