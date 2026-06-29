import { mdiLampOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LampOutline(props: IconComponentProps) {
  return <Icon path={mdiLampOutline} {...props} />;
}

export { mdiLampOutline as path };
