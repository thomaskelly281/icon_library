import { mdiEllipseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EllipseOutline(props: IconComponentProps) {
  return <Icon path={mdiEllipseOutline} {...props} />;
}

export { mdiEllipseOutline as path };
