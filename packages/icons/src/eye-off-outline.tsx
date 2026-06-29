import { mdiEyeOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeOffOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeOffOutline} {...props} />;
}

export { mdiEyeOffOutline as path };
