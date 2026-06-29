import { mdiCakeVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CakeVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiCakeVariantOutline} {...props} />;
}

export { mdiCakeVariantOutline as path };
