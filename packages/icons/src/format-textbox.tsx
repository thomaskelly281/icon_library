import { mdiFormatTextbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatTextbox(props: IconComponentProps) {
  return <Icon path={mdiFormatTextbox} {...props} />;
}

export { mdiFormatTextbox as path };
