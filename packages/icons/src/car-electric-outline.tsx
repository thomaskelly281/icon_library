import { mdiCarElectricOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarElectricOutline(props: IconComponentProps) {
  return <Icon path={mdiCarElectricOutline} {...props} />;
}

export { mdiCarElectricOutline as path };
