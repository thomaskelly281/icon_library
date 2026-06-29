import { mdiAsteriskCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AsteriskCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiAsteriskCircleOutline} {...props} />;
}

export { mdiAsteriskCircleOutline as path };
