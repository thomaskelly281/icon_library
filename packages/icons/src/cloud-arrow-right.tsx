import { mdiCloudArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudArrowRight(props: IconComponentProps) {
  return <Icon path={mdiCloudArrowRight} {...props} />;
}

export { mdiCloudArrowRight as path };
