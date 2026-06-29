import { mdiClosedCaptionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClosedCaptionOutline(props: IconComponentProps) {
  return <Icon path={mdiClosedCaptionOutline} {...props} />;
}

export { mdiClosedCaptionOutline as path };
