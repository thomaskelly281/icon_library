import { mdiPauseBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PauseBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiPauseBoxOutline} {...props} />;
}

export { mdiPauseBoxOutline as path };
