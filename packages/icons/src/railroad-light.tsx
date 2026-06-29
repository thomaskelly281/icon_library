import { mdiRailroadLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RailroadLight(props: IconComponentProps) {
  return <Icon path={mdiRailroadLight} {...props} />;
}

export { mdiRailroadLight as path };
