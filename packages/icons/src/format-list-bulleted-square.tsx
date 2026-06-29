import { mdiFormatListBulletedSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListBulletedSquare(props: IconComponentProps) {
  return <Icon path={mdiFormatListBulletedSquare} {...props} />;
}

export { mdiFormatListBulletedSquare as path };
