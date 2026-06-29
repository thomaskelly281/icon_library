import { mdiFormatLetterSpacing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLetterSpacing(props: IconComponentProps) {
  return <Icon path={mdiFormatLetterSpacing} {...props} />;
}

export { mdiFormatLetterSpacing as path };
