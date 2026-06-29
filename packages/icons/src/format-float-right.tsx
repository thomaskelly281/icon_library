import { mdiFormatFloatRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatFloatRight(props: IconComponentProps) {
  return <Icon path={mdiFormatFloatRight} {...props} />;
}

export { mdiFormatFloatRight as path };
