import { mdiWrenchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WrenchOutline(props: IconComponentProps) {
  return <Icon path={mdiWrenchOutline} {...props} />;
}

export { mdiWrenchOutline as path };
