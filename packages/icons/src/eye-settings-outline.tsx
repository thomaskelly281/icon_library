import { mdiEyeSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeSettingsOutline} {...props} />;
}

export { mdiEyeSettingsOutline as path };
