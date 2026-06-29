import { mdiFormatLetterCaseLower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatLetterCaseLower(props: IconComponentProps) {
  return <Icon path={mdiFormatLetterCaseLower} {...props} />;
}

export { mdiFormatLetterCaseLower as path };
