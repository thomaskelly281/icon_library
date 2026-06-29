import { mdiCrosshairsGps } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CrosshairsGps(props: IconComponentProps) {
  return <Icon path={mdiCrosshairsGps} {...props} />;
}

export { mdiCrosshairsGps as path };
