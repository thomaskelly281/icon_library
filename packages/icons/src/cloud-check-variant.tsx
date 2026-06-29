import { mdiCloudCheckVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudCheckVariant(props: IconComponentProps) {
  return <Icon path={mdiCloudCheckVariant} {...props} />;
}

export { mdiCloudCheckVariant as path };
