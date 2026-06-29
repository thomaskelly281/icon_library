import { mdiRoutesClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RoutesClock(props: IconComponentProps) {
  return <Icon path={mdiRoutesClock} {...props} />;
}

export { mdiRoutesClock as path };
