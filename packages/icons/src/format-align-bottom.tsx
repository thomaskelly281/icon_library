import { mdiFormatAlignBottom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatAlignBottom(props: IconComponentProps) {
  return <Icon path={mdiFormatAlignBottom} {...props} />;
}

export { mdiFormatAlignBottom as path };
