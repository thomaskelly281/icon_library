import { mdiPropaneTankOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PropaneTankOutline(props: IconComponentProps) {
  return <Icon path={mdiPropaneTankOutline} {...props} />;
}

export { mdiPropaneTankOutline as path };
