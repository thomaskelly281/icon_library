import { mdiFormatParagraph } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatParagraph(props: IconComponentProps) {
  return <Icon path={mdiFormatParagraph} {...props} />;
}

export { mdiFormatParagraph as path };
