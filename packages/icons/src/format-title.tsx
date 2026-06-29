import { mdiFormatTitle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatTitle(props: IconComponentProps) {
  return <Icon path={mdiFormatTitle} {...props} />;
}

export { mdiFormatTitle as path };
