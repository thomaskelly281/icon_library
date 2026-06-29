import { mdiEyeMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeMinusOutline} {...props} />;
}

export { mdiEyeMinusOutline as path };
