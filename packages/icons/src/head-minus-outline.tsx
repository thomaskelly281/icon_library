import { mdiHeadMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiHeadMinusOutline} {...props} />;
}

export { mdiHeadMinusOutline as path };
