import { mdiWatchVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WatchVariant(props: IconComponentProps) {
  return <Icon path={mdiWatchVariant} {...props} />;
}

export { mdiWatchVariant as path };
