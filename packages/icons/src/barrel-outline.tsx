import { mdiBarrelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BarrelOutline(props: IconComponentProps) {
  return <Icon path={mdiBarrelOutline} {...props} />;
}

export { mdiBarrelOutline as path };
