import { mdiLandPlots } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LandPlots(props: IconComponentProps) {
  return <Icon path={mdiLandPlots} {...props} />;
}

export { mdiLandPlots as path };
