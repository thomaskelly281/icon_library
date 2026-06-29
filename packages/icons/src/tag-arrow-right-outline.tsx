import { mdiTagArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiTagArrowRightOutline} {...props} />;
}

export { mdiTagArrowRightOutline as path };
