import { mdiSkipPreviousOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipPreviousOutline(props: IconComponentProps) {
  return <Icon path={mdiSkipPreviousOutline} {...props} />;
}

export { mdiSkipPreviousOutline as path };
