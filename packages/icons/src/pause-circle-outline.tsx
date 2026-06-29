import { mdiPauseCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PauseCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiPauseCircleOutline} {...props} />;
}

export { mdiPauseCircleOutline as path };
