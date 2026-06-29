import { mdiSendVariantOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendVariantOutline(props: IconComponentProps) {
  return <Icon path={mdiSendVariantOutline} {...props} />;
}

export { mdiSendVariantOutline as path };
