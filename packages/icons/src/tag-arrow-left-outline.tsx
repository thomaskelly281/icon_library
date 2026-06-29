import { mdiTagArrowLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagArrowLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiTagArrowLeftOutline} {...props} />;
}

export { mdiTagArrowLeftOutline as path };
