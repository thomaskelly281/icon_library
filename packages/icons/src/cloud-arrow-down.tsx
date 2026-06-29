import { mdiCloudArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudArrowDown(props: IconComponentProps) {
  return <Icon path={mdiCloudArrowDown} {...props} />;
}

export { mdiCloudArrowDown as path };
