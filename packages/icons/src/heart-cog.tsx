import { mdiHeartCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartCog(props: IconComponentProps) {
  return <Icon path={mdiHeartCog} {...props} />;
}

export { mdiHeartCog as path };
