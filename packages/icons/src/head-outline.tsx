import { mdiHeadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadOutline} {...props} />;
}

export { mdiHeadOutline as path };
