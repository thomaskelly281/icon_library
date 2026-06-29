import { mdiSkipNextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipNextOutline(props: IconComponentProps) {
  return <Icon path={mdiSkipNextOutline} {...props} />;
}

export { mdiSkipNextOutline as path };
