import { mdiFormatSuperscript } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatSuperscript(props: IconComponentProps) {
  return <Icon path={mdiFormatSuperscript} {...props} />;
}

export { mdiFormatSuperscript as path };
