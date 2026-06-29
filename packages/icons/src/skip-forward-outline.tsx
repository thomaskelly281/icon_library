import { mdiSkipForwardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipForwardOutline(props: IconComponentProps) {
  return <Icon path={mdiSkipForwardOutline} {...props} />;
}

export { mdiSkipForwardOutline as path };
