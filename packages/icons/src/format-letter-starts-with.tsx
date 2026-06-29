import { mdiFormatLetterStartsWith } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLetterStartsWith(props: IconComponentProps) {
  return <Icon path={mdiFormatLetterStartsWith} {...props} />;
}

export { mdiFormatLetterStartsWith as path };
