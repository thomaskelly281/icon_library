import { mdiCloudArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudArrowUp(props: IconComponentProps) {
  return <Icon path={mdiCloudArrowUp} {...props} />;
}

export { mdiCloudArrowUp as path };
