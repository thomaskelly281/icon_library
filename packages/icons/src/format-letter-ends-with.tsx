import { mdiFormatLetterEndsWith } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLetterEndsWith(props: IconComponentProps) {
  return <Icon path={mdiFormatLetterEndsWith} {...props} />;
}

export { mdiFormatLetterEndsWith as path };
