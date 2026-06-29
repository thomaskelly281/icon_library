import { mdiFormatListBulletedTriangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListBulletedTriangle(props: IconComponentProps) {
  return <Icon path={mdiFormatListBulletedTriangle} {...props} />;
}

export { mdiFormatListBulletedTriangle as path };
