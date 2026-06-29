import { mdiFormatWrapInline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FormatWrapInline(props: IconComponentProps) {
  return <Icon path={mdiFormatWrapInline} {...props} />;
}

export { mdiFormatWrapInline as path };
