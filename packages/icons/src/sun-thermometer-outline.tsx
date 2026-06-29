import { mdiSunThermometerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunThermometerOutline(props: IconComponentProps) {
  return <Icon path={mdiSunThermometerOutline} {...props} />;
}

export { mdiSunThermometerOutline as path };
