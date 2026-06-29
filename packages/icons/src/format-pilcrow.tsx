import { mdiFormatPilcrow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatPilcrow(props: IconComponentProps) {
  return <Icon path={mdiFormatPilcrow} {...props} />;
}

export { mdiFormatPilcrow as path };
