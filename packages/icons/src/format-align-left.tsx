import { mdiFormatAlignLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatAlignLeft(props: IconComponentProps) {
  return <Icon path={mdiFormatAlignLeft} {...props} />;
}

export { mdiFormatAlignLeft as path };
