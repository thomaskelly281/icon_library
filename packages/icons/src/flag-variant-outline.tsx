import { mdiFlagVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiFlagVariantOutline} {...props} />;
}

export { mdiFlagVariantOutline as path };
