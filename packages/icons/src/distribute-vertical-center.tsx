import { mdiDistributeVerticalCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DistributeVerticalCenter(props: IconComponentProps) {
  return <Icon path={mdiDistributeVerticalCenter} {...props} />;
}

export { mdiDistributeVerticalCenter as path };
