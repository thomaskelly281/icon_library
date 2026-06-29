import { mdiFormatListBulletedType } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListBulletedType(props: IconComponentProps) {
  return <Icon path={mdiFormatListBulletedType} {...props} />;
}

export { mdiFormatListBulletedType as path };
