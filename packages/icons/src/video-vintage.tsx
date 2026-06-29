import { mdiVideoVintage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoVintage(props: IconComponentProps) {
  return <Icon path={mdiVideoVintage} {...props} />;
}

export { mdiVideoVintage as path };
