import { mdiCloudCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCheck(props: IconComponentProps) {
  return <Icon path={mdiCloudCheck} {...props} />;
}

export { mdiCloudCheck as path };
