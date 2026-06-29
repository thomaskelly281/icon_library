import { mdiFormatLineHeight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLineHeight(props: IconComponentProps) {
  return <Icon path={mdiFormatLineHeight} {...props} />;
}

export { mdiFormatLineHeight as path };
