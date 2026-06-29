import { mdiLedVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LedVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiLedVariantOutline} {...props} />;
}

export { mdiLedVariantOutline as path };
