import { mdiFormatFloatCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatFloatCenter(props: IconComponentProps) {
  return <Icon path={mdiFormatFloatCenter} {...props} />;
}

export { mdiFormatFloatCenter as path };
