import { mdiCloudPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudPercent(props: IconComponentProps) {
  return <Icon path={mdiCloudPercent} {...props} />;
}

export { mdiCloudPercent as path };
