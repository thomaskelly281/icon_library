import { mdiMessageArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageArrowLeftOutline} {...props} />;
}

export { mdiMessageArrowLeftOutline as path };
