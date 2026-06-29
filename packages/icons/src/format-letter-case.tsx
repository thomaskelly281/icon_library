import { mdiFormatLetterCase } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLetterCase(props: IconComponentProps) {
  return <Icon path={mdiFormatLetterCase} {...props} />;
}

export { mdiFormatLetterCase as path };
