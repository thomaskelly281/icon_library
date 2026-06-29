import { mdiHeartMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartMinus(props: IconComponentProps) {
  return <Icon path={mdiHeartMinus} {...props} />;
}

export { mdiHeartMinus as path };
