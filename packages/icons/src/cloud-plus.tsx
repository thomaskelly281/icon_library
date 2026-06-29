import { mdiCloudPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudPlus(props: IconComponentProps) {
  return <Icon path={mdiCloudPlus} {...props} />;
}

export { mdiCloudPlus as path };
