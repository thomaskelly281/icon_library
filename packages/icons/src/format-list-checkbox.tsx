import { mdiFormatListCheckbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatListCheckbox(props: IconComponentProps) {
  return <Icon path={mdiFormatListCheckbox} {...props} />;
}

export { mdiFormatListCheckbox as path };
