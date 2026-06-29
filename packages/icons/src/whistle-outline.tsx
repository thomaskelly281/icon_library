import { mdiWhistleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WhistleOutline(props: IconComponentProps) {
  return <Icon path={mdiWhistleOutline} {...props} />;
}

export { mdiWhistleOutline as path };
