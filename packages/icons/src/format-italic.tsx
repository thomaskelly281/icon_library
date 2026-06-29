import { mdiFormatItalic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatItalic(props: IconComponentProps) {
  return <Icon path={mdiFormatItalic} {...props} />;
}

export { mdiFormatItalic as path };
