import { mdiLandslideOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LandslideOutline(props: IconComponentProps) {
  return <Icon path={mdiLandslideOutline} {...props} />;
}

export { mdiLandslideOutline as path };
