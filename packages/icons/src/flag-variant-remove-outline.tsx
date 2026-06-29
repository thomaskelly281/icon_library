import { mdiFlagVariantRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagVariantRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFlagVariantRemoveOutline} {...props} />;
}

export { mdiFlagVariantRemoveOutline as path };
