import { mdiFormatParagraphSpacing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatParagraphSpacing(props: IconComponentProps) {
  return <Icon path={mdiFormatParagraphSpacing} {...props} />;
}

export { mdiFormatParagraphSpacing as path };
