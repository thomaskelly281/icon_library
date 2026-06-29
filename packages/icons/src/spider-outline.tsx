import { mdiSpiderOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpiderOutline(props: IconComponentProps) {
  return <Icon path={mdiSpiderOutline} {...props} />;
}

export { mdiSpiderOutline as path };
