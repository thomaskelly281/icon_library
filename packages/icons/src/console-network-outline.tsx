import { mdiConsoleNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ConsoleNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiConsoleNetworkOutline} {...props} />;
}

export { mdiConsoleNetworkOutline as path };
