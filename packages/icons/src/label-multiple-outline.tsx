import { mdiLabelMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LabelMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiLabelMultipleOutline} {...props} />;
}

export { mdiLabelMultipleOutline as path };
