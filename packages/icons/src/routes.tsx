import { mdiRoutes } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Routes(props: IconComponentProps) {
  return <Icon path={mdiRoutes} {...props} />;
}

export { mdiRoutes as path };
