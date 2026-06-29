import { mdiCloudBraces } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudBraces(props: IconComponentProps) {
  return <Icon path={mdiCloudBraces} {...props} />;
}

export { mdiCloudBraces as path };
