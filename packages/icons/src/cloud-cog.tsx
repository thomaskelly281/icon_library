import { mdiCloudCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCog(props: IconComponentProps) {
  return <Icon path={mdiCloudCog} {...props} />;
}

export { mdiCloudCog as path };
