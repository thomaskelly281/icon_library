import { mdiLabelVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LabelVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiLabelVariantOutline} {...props} />;
}

export { mdiLabelVariantOutline as path };
