import { mdiTriangleDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TriangleDownOutline(props: IconComponentProps) {
  return <Icon path={mdiTriangleDownOutline} {...props} />;
}

export { mdiTriangleDownOutline as path };
