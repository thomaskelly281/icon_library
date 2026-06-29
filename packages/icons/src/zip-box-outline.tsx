import { mdiZipBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZipBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiZipBoxOutline} {...props} />;
}

export { mdiZipBoxOutline as path };
