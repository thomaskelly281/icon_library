import { mdiEyeArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeArrowRightOutline} {...props} />;
}

export { mdiEyeArrowRightOutline as path };
