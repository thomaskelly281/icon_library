import { mdiFormatPageBreak } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatPageBreak(props: IconComponentProps) {
  return <Icon path={mdiFormatPageBreak} {...props} />;
}

export { mdiFormatPageBreak as path };
