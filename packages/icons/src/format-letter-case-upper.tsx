import { mdiFormatLetterCaseUpper } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLetterCaseUpper(props: IconComponentProps) {
  return <Icon path={mdiFormatLetterCaseUpper} {...props} />;
}

export { mdiFormatLetterCaseUpper as path };
