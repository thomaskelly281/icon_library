import { mdiToothOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToothOutline(props: IconComponentProps) {
  return <Icon path={mdiToothOutline} {...props} />;
}

export { mdiToothOutline as path };
