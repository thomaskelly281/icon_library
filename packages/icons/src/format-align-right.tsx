import { mdiFormatAlignRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatAlignRight(props: IconComponentProps) {
  return <Icon path={mdiFormatAlignRight} {...props} />;
}

export { mdiFormatAlignRight as path };
