import { mdiLinkCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiLinkCircleOutline} {...props} />;
}

export { mdiLinkCircleOutline as path };
