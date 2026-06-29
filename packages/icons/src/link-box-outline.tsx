import { mdiLinkBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LinkBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiLinkBoxOutline} {...props} />;
}

export { mdiLinkBoxOutline as path };
