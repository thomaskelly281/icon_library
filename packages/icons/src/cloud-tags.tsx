import { mdiCloudTags } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudTags(props: IconComponentProps) {
  return <Icon path={mdiCloudTags} {...props} />;
}

export { mdiCloudTags as path };
