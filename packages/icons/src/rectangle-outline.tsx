import { mdiRectangleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RectangleOutline(props: IconComponentProps) {
  return <Icon path={mdiRectangleOutline} {...props} />;
}

export { mdiRectangleOutline as path };
