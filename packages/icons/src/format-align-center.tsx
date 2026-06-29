import { mdiFormatAlignCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatAlignCenter(props: IconComponentProps) {
  return <Icon path={mdiFormatAlignCenter} {...props} />;
}

export { mdiFormatAlignCenter as path };
