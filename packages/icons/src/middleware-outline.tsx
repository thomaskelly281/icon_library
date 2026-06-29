import { mdiMiddlewareOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MiddlewareOutline(props: IconComponentProps) {
  return <Icon path={mdiMiddlewareOutline} {...props} />;
}

export { mdiMiddlewareOutline as path };
