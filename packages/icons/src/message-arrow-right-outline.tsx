import { mdiMessageArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageArrowRightOutline} {...props} />;
}

export { mdiMessageArrowRightOutline as path };
