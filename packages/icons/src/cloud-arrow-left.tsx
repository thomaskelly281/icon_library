import { mdiCloudArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiCloudArrowLeft} {...props} />;
}

export { mdiCloudArrowLeft as path };
