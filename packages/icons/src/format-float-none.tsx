import { mdiFormatFloatNone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatFloatNone(props: IconComponentProps) {
  return <Icon path={mdiFormatFloatNone} {...props} />;
}

export { mdiFormatFloatNone as path };
