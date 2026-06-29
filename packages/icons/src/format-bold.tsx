import { mdiFormatBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatBold(props: IconComponentProps) {
  return <Icon path={mdiFormatBold} {...props} />;
}

export { mdiFormatBold as path };
