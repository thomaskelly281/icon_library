import { mdiStopCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StopCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiStopCircleOutline} {...props} />;
}

export { mdiStopCircleOutline as path };
