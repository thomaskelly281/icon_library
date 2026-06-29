import { mdiWaterBoilerAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WaterBoilerAuto(props: IconComponentProps) {
  return <Icon path={mdiWaterBoilerAuto} {...props} />;
}

export { mdiWaterBoilerAuto as path };
