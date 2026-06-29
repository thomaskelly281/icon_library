import { mdiStretchToPageOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StretchToPageOutline(props: IconComponentProps) {
  return <Icon path={mdiStretchToPageOutline} {...props} />;
}

export { mdiStretchToPageOutline as path };
