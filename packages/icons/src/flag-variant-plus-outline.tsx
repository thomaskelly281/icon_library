import { mdiFlagVariantPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagVariantPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFlagVariantPlusOutline} {...props} />;
}

export { mdiFlagVariantPlusOutline as path };
