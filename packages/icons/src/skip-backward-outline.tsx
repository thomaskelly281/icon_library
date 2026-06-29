import { mdiSkipBackwardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipBackwardOutline(props: IconComponentProps) {
  return <Icon path={mdiSkipBackwardOutline} {...props} />;
}

export { mdiSkipBackwardOutline as path };
