import { mdiFormatAlignTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatAlignTop(props: IconComponentProps) {
  return <Icon path={mdiFormatAlignTop} {...props} />;
}

export { mdiFormatAlignTop as path };
