import { mdiCloudMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudMinus(props: IconComponentProps) {
  return <Icon path={mdiCloudMinus} {...props} />;
}

export { mdiCloudMinus as path };
