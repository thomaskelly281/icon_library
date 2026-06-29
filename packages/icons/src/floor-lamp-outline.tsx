import { mdiFloorLampOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FloorLampOutline(props: IconComponentProps) {
  return <Icon path={mdiFloorLampOutline} {...props} />;
}

export { mdiFloorLampOutline as path };
