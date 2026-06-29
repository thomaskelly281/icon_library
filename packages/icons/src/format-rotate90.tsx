import { mdiFormatRotate90 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatRotate90(props: IconComponentProps) {
  return <Icon path={mdiFormatRotate90} {...props} />;
}

export { mdiFormatRotate90 as path };
