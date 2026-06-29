import { mdiRewindOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RewindOutline(props: IconComponentProps) {
  return <Icon path={mdiRewindOutline} {...props} />;
}

export { mdiRewindOutline as path };
