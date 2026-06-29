import { mdiFormatHeader1 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatHeader1(props: IconComponentProps) {
  return <Icon path={mdiFormatHeader1} {...props} />;
}

export { mdiFormatHeader1 as path };
