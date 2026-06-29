import { mdiFormatQuoteClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatQuoteClose(props: IconComponentProps) {
  return <Icon path={mdiFormatQuoteClose} {...props} />;
}

export { mdiFormatQuoteClose as path };
