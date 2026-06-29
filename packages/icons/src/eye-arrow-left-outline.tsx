import { mdiEyeArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeArrowLeftOutline} {...props} />;
}

export { mdiEyeArrowLeftOutline as path };
