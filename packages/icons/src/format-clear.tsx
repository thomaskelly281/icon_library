import { mdiFormatClear } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatClear(props: IconComponentProps) {
  return <Icon path={mdiFormatClear} {...props} />;
}

export { mdiFormatClear as path };
