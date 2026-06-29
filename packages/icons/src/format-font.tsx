import { mdiFormatFont } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatFont(props: IconComponentProps) {
  return <Icon path={mdiFormatFont} {...props} />;
}

export { mdiFormatFont as path };
