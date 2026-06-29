import { mdiFormatFloatLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatFloatLeft(props: IconComponentProps) {
  return <Icon path={mdiFormatFloatLeft} {...props} />;
}

export { mdiFormatFloatLeft as path };
