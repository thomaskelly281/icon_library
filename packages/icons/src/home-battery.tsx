import { mdiHomeBattery } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeBattery(props: IconComponentProps) {
  return <Icon path={mdiHomeBattery} {...props} />;
}

export { mdiHomeBattery as path };
