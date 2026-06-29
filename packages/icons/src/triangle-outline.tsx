import { mdiTriangleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TriangleOutline(props: IconComponentProps) {
  return <Icon path={mdiTriangleOutline} {...props} />;
}

export { mdiTriangleOutline as path };
