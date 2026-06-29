import { mdiLabelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LabelOutline(props: IconComponentProps) {
  return <Icon path={mdiLabelOutline} {...props} />;
}

export { mdiLabelOutline as path };
