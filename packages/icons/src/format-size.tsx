import { mdiFormatSize } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatSize(props: IconComponentProps) {
  return <Icon path={mdiFormatSize} {...props} />;
}

export { mdiFormatSize as path };
