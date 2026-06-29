import { mdiFormatQuoteOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatQuoteOpen(props: IconComponentProps) {
  return <Icon path={mdiFormatQuoteOpen} {...props} />;
}

export { mdiFormatQuoteOpen as path };
