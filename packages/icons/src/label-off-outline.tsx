import { mdiLabelOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LabelOffOutline(props: IconComponentProps) {
  return <Icon path={mdiLabelOffOutline} {...props} />;
}

export { mdiLabelOffOutline as path };
