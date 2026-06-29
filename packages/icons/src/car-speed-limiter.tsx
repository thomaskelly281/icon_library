import { mdiCarSpeedLimiter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSpeedLimiter(props: IconComponentProps) {
  return <Icon path={mdiCarSpeedLimiter} {...props} />;
}

export { mdiCarSpeedLimiter as path };
