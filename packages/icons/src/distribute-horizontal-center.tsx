import { mdiDistributeHorizontalCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DistributeHorizontalCenter(props: IconComponentProps) {
  return <Icon path={mdiDistributeHorizontalCenter} {...props} />;
}

export { mdiDistributeHorizontalCenter as path };
