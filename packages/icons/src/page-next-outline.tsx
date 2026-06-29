import { mdiPageNextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageNextOutline(props: IconComponentProps) {
  return <Icon path={mdiPageNextOutline} {...props} />;
}

export { mdiPageNextOutline as path };
